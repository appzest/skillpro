package com.app.skill.pro;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.app.skill.pro.Model.CourseDetailsModel;
import com.app.skill.pro.Model.SectionModel;
import com.app.skill.pro.adapter.courseSectionsAdapter;
import com.app.skill.pro.classes.RetrofitAPI;
import com.app.skill.pro.classes.SectionPrefs;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import java.io.IOException;
import java.util.List;

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


public class courseSectionActivity extends AppCompatActivity implements courseSectionsAdapter.ItemClickListener {

    Dialog loadingDialog , loadingDialogNew,dialog;


    private FirebaseUser currentUser;
    private FirebaseAuth mAuth;


    com.app.skill.pro.classes.RetrofitAPI RetrofitAPI;



    private String cookie, taskid, courseName, courseLogo, courseDescription;



     int courseId;



    private RecyclerView recyclerView;
    courseSectionsAdapter courseSectionsAdapters;
    List<CourseDetailsModel> courseSectionList;



    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);



        setContentView(R.layout.activity_course_sections);
        getSupportActionBar().hide();

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(Color.TRANSPARENT); // Make status bar fully transparent
            window.getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            );
        }



//        }



        // back arrow
        findViewById(R.id.backBtn).setOnClickListener(v -> onBackPressed());





        loadingDialogNew = new Dialog(courseSectionActivity.this);
        loadingDialogNew.setContentView(R.layout.loading_dialog);
        loadingDialogNew.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        loadingDialogNew.setCancelable(false);





        SharedPreferences sh = getSharedPreferences("cookie", Context.MODE_PRIVATE);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(RetrofitAPI.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI = retrofit.create(RetrofitAPI.class);

        cookie = sh.getString("cookie", "");





        mAuth = FirebaseAuth.getInstance();
        currentUser = mAuth.getCurrentUser();




        courseId = getIntent().getIntExtra("id", 0);
        Log.d("rishav", "onCreate: " + courseId);
        courseName = getIntent().getStringExtra("courseName");
        courseLogo = getIntent().getStringExtra("courseLogo");
        courseDescription = getIntent().getStringExtra("courseDescription");


        TextView nametext = findViewById(R.id.courseName);
        nametext.setText(courseName);



        recyclerView = findViewById(R.id.recyclerView);


        recyclerView.setLayoutManager(new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false));







        getCourseSections();













    }


    public void getCourseSections() {

        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "{ \"courseId\" : \"" + courseId + "\"}");

        OkHttpClient client = new OkHttpClient().newBuilder().addInterceptor(new Interceptor() {
            @Override
            public Response intercept(@NonNull Chain chain) throws IOException {
                Request request = chain.request()
                        .newBuilder()
                        .addHeader("Content-Type", "application/json")
                        .addHeader("Cookie", cookie)
                        .method("POST", body)
                        .build();
                return chain.proceed(request);
            }
        }).build();

        Retrofit retrofit = new Retrofit.Builder()
                .client(client)
                .baseUrl(RetrofitAPI.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI api = retrofit.create(RetrofitAPI.class);

        Call<List<CourseDetailsModel>> call = api.getCoursDetailsModel();
        call.enqueue(new Callback<List<CourseDetailsModel>>() {
            @Override
            public void onResponse(Call<List<CourseDetailsModel>> call, retrofit2.Response<List<CourseDetailsModel>> response) {
                if (!response.isSuccessful() || response.body() == null || response.body().isEmpty()) {
                    return;
                }

                courseSectionList = response.body();

                List<SectionModel> originalList = courseSectionList.get(0).getSections();
                List<SectionModel> finalList = new java.util.ArrayList<>();

                for (SectionModel section : originalList) {
                    if ("free".equalsIgnoreCase(section.getType())) {
                        finalList.add(section);
                    }
                }

                // Insert PRO label
                SectionModel proLabel = new SectionModel();
                proLabel.setType("pro_label");
                proLabel.setTitle("PRO CONTENT");
                finalList.add(proLabel);

                for (SectionModel section : originalList) {
                    if ("pro".equalsIgnoreCase(section.getType())) {
                        finalList.add(section);
                    }
                }

                // Set adapter
                courseSectionsAdapters = new courseSectionsAdapter(courseSectionActivity.this, finalList, courseId);
                courseSectionsAdapters.setClickListener(courseSectionActivity.this);
                recyclerView.setAdapter(courseSectionsAdapters);

                updateProgressUI(finalList);

            }

            @Override
            public void onFailure(Call<List<CourseDetailsModel>> call, Throwable t) {
                Log.d("TAG", "onFailure: " + t.getMessage());
            }
        });
    }









    @Override
    public void onPause() {
        super.onPause();
    }


    @Override
    public void onDestroy() {

        super.onDestroy();

    }


    @Override
    public void onResume() {


        super.onResume();
        getCourseSections();


    }



    @Override
    public void onItemClick(View view, int position) {
        SectionModel clickedSection = courseSectionsAdapters.getItem(position);

            Intent intent = new Intent(courseSectionActivity.this, CourseContentActivity.class);
            intent.putExtra("contents", (java.io.Serializable) clickedSection.getContents());
            intent.putExtra("sectionTitle", clickedSection.getTitle());
            intent.putExtra("sectionIndex", position + 1); // <- this is important
            intent.putExtra("courseId", courseId);
            startActivity(intent);

    }

    private void updateProgressUI(List<SectionModel> sections) {
        int totalSections = 0;
        for (SectionModel model : sections) {
            if ("free".equalsIgnoreCase(model.getType()) || "pro".equalsIgnoreCase(model.getType())) {
                totalSections++;
            }
        }

        int completedIndex = SectionPrefs.getCompletedSection(this, courseId);
        int completedSections = Math.min(completedIndex, totalSections); // in case of inconsistency

        int percentage = (int) ((completedSections * 100f) / totalSections);

        ProgressBar progressCircle = findViewById(R.id.progressCircle);
        TextView progressPercentText = findViewById(R.id.progressPercentText);

        progressCircle.setProgress(percentage);
        progressPercentText.setText(percentage + "%");
    }





}