package com.app.skill.pro.fragments;

import static android.content.Context.MODE_PRIVATE;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.app.skill.pro.Model.CourseModel;
import com.app.skill.pro.R;
import com.app.skill.pro.adapter.courseAdapter;
import com.app.skill.pro.adapter.progressAdapter;
import com.app.skill.pro.classes.RetrofitAPI;
import com.app.skill.pro.courseDetailsActivity;
import com.app.skill.pro.courseSectionActivity;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class ProgressFragment extends Fragment {


    View view;


    private RecyclerView taskRecycleView;

    progressAdapter taskAdapters;
    List<CourseModel> tasksList;


    String cok = "";




    FirebaseUser currentUser;

    private FirebaseAuth mAuth;


    private boolean isFirstResume = true; // initialize true

    private OkHttpClient client;
    private Retrofit retrofit;
    private RetrofitAPI api;

    GridLayoutManager layoutManager;

    public static ProgressFragment newInstance(String param1, String param2) {
        ProgressFragment fragment = new ProgressFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_progress, container, false);


        if (getActivity() != null) {
            SharedPreferences sh = getActivity().getSharedPreferences("cookie", MODE_PRIVATE);
            cok = sh.getString("cookie", "");

            client = new OkHttpClient.Builder()
                    .connectTimeout(40, TimeUnit.SECONDS)
                    .writeTimeout(40, TimeUnit.SECONDS)
                    .readTimeout(40, TimeUnit.SECONDS)
                    .addInterceptor(new Interceptor() {
                        @Override
                        public Response intercept(@NonNull Chain chain) throws IOException {
                            Request request = chain.request()
                                    .newBuilder()
                                    .addHeader("Content-Type", "application/json")
                                    .addHeader("Cookie", cok)
                                    .build();
                            return chain.proceed(request);
                        }
                    }).build();

            retrofit = new Retrofit.Builder()
                    .client(client)
                    .baseUrl(RetrofitAPI.BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();

            api = retrofit.create(RetrofitAPI.class);
        }

        mAuth = FirebaseAuth.getInstance();
        currentUser = mAuth.getCurrentUser();

        taskRecycleView = view.findViewById(R.id.taskRecycleView);
         layoutManager = new GridLayoutManager(getContext(), 2);
        taskRecycleView.setLayoutManager(layoutManager);

        gettaskslist();






        return view;
    }




    public void gettaskslist() {


        String appVersion = getString(R.string.app_version);
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "{ \"appversion\" : \"" + appVersion + "\"}");


        Call<List<CourseModel>> call = api.gettasksModel(body);
        call.enqueue(new Callback<List<CourseModel>>() {
            @Override
            public void onResponse(Call<List<CourseModel>> call, retrofit2.Response<List<CourseModel>> response) {
                if (!response.isSuccessful()) {
                    return;
                }


                tasksList = response.body();

                List<CourseModel> allCourses = response.body();
                SharedPreferences prefs = getActivity().getSharedPreferences("section_pref", Context.MODE_PRIVATE);

                List<CourseModel> startedCourses = new java.util.ArrayList<>();
                for (CourseModel course : allCourses) {
                    int courseId = course.getId();
                    if (prefs.contains("completed_section_" + courseId)) {
                        startedCourses.add(course);
                    }
                }

                tasksList = startedCourses; // now contains only started courses
                taskAdapters = new progressAdapter(getActivity(), tasksList);
                taskRecycleView.setAdapter(taskAdapters);

                taskAdapters.setClickListener((selectedTask, position) -> {
                    int courseId = selectedTask.getId();

                    SharedPreferences prefs1 = getActivity().getSharedPreferences("section_pref", Context.MODE_PRIVATE);
                    boolean isCourseStarted = prefs1.contains("completed_section_" + courseId);

                    Intent i;
                    if (isCourseStarted) {
                        // Go directly to courseSectionActivity if course is already started
                        i = new Intent(getActivity(), courseSectionActivity.class);
                    } else {
                        // Otherwise go to courseDetailsActivity
                        i = new Intent(getActivity(), courseDetailsActivity.class);
                    }

                    i.putExtra("id", courseId);
                    i.putExtra("courseName", selectedTask.getCourseName());
                    i.putExtra("courseLogo", selectedTask.getCourseLogo());
                    i.putExtra("courseDescription", selectedTask.getDescription());

                    startActivity(i);
                });




                if (tasksList.size() == 0) {
                    taskRecycleView.setVisibility(View.GONE);
                    TextView no_task_txt = view.findViewById(R.id.no_task_txt);
                    no_task_txt.setVisibility(View.VISIBLE);
                } else {

                }








            }

            @Override
            public void onFailure(Call<List<CourseModel>> call, Throwable t) {
                Log.d("TAG", "onResponse: " + t.getMessage());

            }


        });
    }








    @Override
    public void onDestroyView() {
        super.onDestroyView();

    }

    @Override
    public void onResume(){
        super.onResume();
        if (isFirstResume) {
            isFirstResume = false; // skip calling usersDetails() the first time
        } else {
        }
    }


}