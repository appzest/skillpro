package com.app.skill.pro;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.LayoutInflater;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import com.app.skill.pro.classes.RetrofitAPI;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.bottomsheet.BottomSheetDialog;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GetTokenResult;


import java.io.IOException;
import java.util.List;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class SplashActivity extends AppCompatActivity {


    FirebaseAuth auth;
    FirebaseUser user;


    private com.app.skill.pro.classes.RetrofitAPI RetrofitAPI;

    String cok;

    String idToken;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);
        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.hide();
        }


        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setNavigationBarColor(getResources().getColor(R.color.white));
            window.setStatusBarColor(getResources().getColor(R.color.white));

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                View decor = window.getDecorView();
                decor.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
            }


        }





        auth = FirebaseAuth.getInstance();
        user = auth.getCurrentUser();


        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(RetrofitAPI.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI = retrofit.create(RetrofitAPI.class);




       showingData();




    }


    private void showingData() {

        if (user != null) {


            FirebaseUser mUser = FirebaseAuth.getInstance().getCurrentUser();
            mUser.getIdToken(true).addOnCompleteListener(new OnCompleteListener<GetTokenResult>() {
                public void onComplete(@NonNull Task<GetTokenResult> task) {
                    if (task.isSuccessful()) {
                        idToken = task.getResult().getToken();
                        LoginonNodeapp(idToken);

                    } else {
                    }
                }
            });



        } else {

            Intent n = new Intent(SplashActivity.this, LoginActivity.class);
            startActivity(n);
            finish();

        }
    }


    private void LoginonNodeapp(String idToken) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                OkHttpClient client = new OkHttpClient().newBuilder().build();
                MediaType mediaType = MediaType.parse("application/json");
                RequestBody body = RequestBody.create(mediaType, "{ \"idToken\" : \"" + idToken + "\"}");

                Request request = new Request.Builder()
                        .url(RetrofitAPI.BASE_URL + "auth/login")
                        .method("POST", body)
                        .addHeader("Content-Type", "application/json")
                        .addHeader("Cookie", "session=" + idToken)
                        .build();

                try {
                    Response response = client.newCall(request).execute();

                    if (response.code() == 200) {
                        List<String> sessiosMap = response.headers("Set-Cookie");
                        String cok = sessiosMap.get(0).split(";")[0];

                        if (SplashActivity.this != null) {
                            SharedPreferences sharedPreferences = getSharedPreferences("cookie", MODE_PRIVATE);
                            SharedPreferences.Editor myEdit = sharedPreferences.edit();
                            myEdit.putString("cookie", cok);
                            myEdit.commit();

                            SharedPreferences prefs1 = getSharedPreferences("AppPrefs", MODE_PRIVATE);
                            prefs1.edit().clear().apply(); // Clear all stored values


                        }


                        SharedPreferences prefs = getSharedPreferences("notifications", MODE_PRIVATE);
                        int actionCode = prefs.getInt("OFFERWALL_CODE", 0);


                        if (actionCode == 1) {
                            SharedPreferences.Editor editor = prefs.edit();
                            editor.remove("OFFERWALL_CODE");
                            editor.apply();
                        } else {

                            Intent n = new Intent(SplashActivity.this, MainActivity.class);
                            startActivity(n);
                            finish();
                        }

                    } else {
                        errordialog("Something went wrong. Please try again later.");
                    }
                } catch (IOException e) {
                    errordialog(e.getMessage());
                }
            }
        });
        thread.start();
    }





    private void errordialog(String message) {

        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {



                BottomSheetDialog bottomSheetDialog = new BottomSheetDialog(SplashActivity.this);
                View sheetView = LayoutInflater.from(SplashActivity.this).inflate(R.layout.errordialog, null);

                Window window = bottomSheetDialog.getWindow();
                if (window != null) {
                    // Change navigation bar color when the bottom sheet is opened
                    window.setNavigationBarColor(ContextCompat.getColor(SplashActivity.this, R.color.white));
                }

                bottomSheetDialog.setContentView(sheetView);
                bottomSheetDialog.setCancelable(false);

                TextView messagetxt = sheetView.findViewById(R.id.message);
                LinearLayout close = sheetView.findViewById(R.id.btn);

                messagetxt.setText(message);

                close.setOnClickListener(v -> {
                    // Restore original navigation bar color when closing
                    if (window != null) {
                        window.setNavigationBarColor(ContextCompat.getColor(SplashActivity.this, R.color.white));
                    }
                    bottomSheetDialog.dismiss();
                });

                bottomSheetDialog.setOnDismissListener(dialog -> {
                    // Ensure navigation bar color is restored even if dismissed externally
                    if (window != null) {
                        window.setNavigationBarColor(ContextCompat.getColor(SplashActivity.this, R.color.white));
                    }
                });

                bottomSheetDialog.show();

            }
        });
    }





    @Override
    protected void onResume() {
        super.onResume();
    }











}









