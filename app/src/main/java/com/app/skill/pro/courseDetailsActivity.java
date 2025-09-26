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
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.text.HtmlCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.app.skill.pro.Model.CourseDetailsModel;
import com.app.skill.pro.adapter.courseSectionsAdapter;
import com.app.skill.pro.classes.RetrofitAPI;
import com.bumptech.glide.Glide;
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


public class courseDetailsActivity extends AppCompatActivity  {

    Dialog loadingDialog , loadingDialogNew,dialog;

    ImageView back;
    LinearLayout submit;


    private FirebaseUser currentUser;
    private FirebaseAuth mAuth;


    com.app.skill.pro.classes.RetrofitAPI RetrofitAPI;

    int min, eventId;

    private String cookie, courseName, courseLogo, courseDescription;


    int courseId;





    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);



        setContentView(R.layout.activity_courseinfo);
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





        loadingDialogNew = new Dialog(courseDetailsActivity.this);
        loadingDialogNew.setContentView(R.layout.loading_dialog);
        loadingDialogNew.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        loadingDialogNew.setCancelable(false);

//        loadingDialog = new Dialog(this);
//        loadingDialog.setContentView(R.layout.loading_dialog);
//        loadingDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
//        loadingDialog.setCancelable(false);
//        loadingDialog.show();




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
        courseName = getIntent().getStringExtra("courseName");
        courseLogo = getIntent().getStringExtra("courseLogo");
        courseDescription = getIntent().getStringExtra("courseDescription");




        ImageView image = findViewById(R.id.courseLogo);
        Glide.with(courseDetailsActivity.this).load(courseLogo).into(image);

        TextView descTxt = findViewById(R.id.courseDescriptionTxt);
        descTxt.setText(HtmlCompat.fromHtml(courseDescription, HtmlCompat.FROM_HTML_MODE_LEGACY));


        TextView nametext = findViewById(R.id.courseName);
        nametext.setText(courseName);


        back = findViewById(R.id.backBtn);
        submit = findViewById(R.id.submit);


        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });




        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {


                //pass the intent to courseActivity

                Intent i = new Intent(courseDetailsActivity.this, courseSectionActivity.class);
                i.putExtra("id", courseId);
                i.putExtra("courseName", courseName);
                i.putExtra("courseLogo", courseLogo);
                i.putExtra("courseDescription", courseDescription);
                startActivity(i);

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


    }
}