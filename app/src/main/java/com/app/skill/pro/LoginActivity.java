package com.app.skill.pro;

import android.app.Dialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.bottomsheet.BottomSheetDialog;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GetTokenResult;
import com.google.firebase.auth.GoogleAuthProvider;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import com.app.skill.pro.classes.RetrofitAPI;


public class LoginActivity extends AppCompatActivity {



    private LinearLayout signInButton;

    GoogleSignInClient mGoogleSignInClient;

    private int RC_SIGN_IN = 1, randomReferCode = 0;

    private FirebaseAuth mAuth;
    private FirebaseUser currentUser;

    com.app.skill.pro.classes.RetrofitAPI RetrofitAPI;

    String uid, androidId, token;

    private Dialog loadingDialog;


    TextView toc,pp;


    private static final String TAG = "InstallReferrer";

    private String utmSource = "";
    private String utmMedium = "";

    private InstallReferrerClient referrerClient;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        getSupportActionBar().hide();




        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setNavigationBarColor(getResources().getColor(R.color.blue));
            window.setStatusBarColor(getResources().getColor(R.color.blue));

            // Remove SYSTEM_UI_FLAG_LIGHT_STATUS_BAR to keep icons white
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                View decor = window.getDecorView();
                // Clear the light status bar flag (set icons to white)
                int flags = decor.getSystemUiVisibility();
                flags &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
                decor.setSystemUiVisibility(flags);
            }
        }



        androidId = Settings.Secure.getString(getContentResolver(),
                Settings.Secure.ANDROID_ID);

        toc = findViewById(R.id.toc);
        pp = findViewById(R.id.pp);

        randomReferCode = 1111111 + (int) (Math.random() * 9999999);

        getInstallReferrer();

        loadingDialog = new Dialog(this);
        loadingDialog.setContentView(R.layout.loading_dialog);
        loadingDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        loadingDialog.setCancelable(false);

        signInButton = findViewById(R.id.google_signin);
        mAuth = FirebaseAuth.getInstance();
        currentUser = mAuth.getCurrentUser();


        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(RetrofitAPI.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI = retrofit.create(RetrofitAPI.class);

        signInButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                        .requestIdToken(getString(R.string.default_web_client_id))
                        .requestEmail()
                        .build();
                mGoogleSignInClient = GoogleSignIn.getClient(LoginActivity.this, gso);

                signIn();



                loadingDialog.show();


            }
        });

        signInButton.setOnTouchListener((v, event) -> {
            switch (event.getAction()) {
                case MotionEvent.ACTION_DOWN:
                    v.animate().scaleX(0.85f).scaleY(0.85f).setDuration(100).start();
                    return false; // allow click to propagate
                case MotionEvent.ACTION_UP:
                case MotionEvent.ACTION_CANCEL:
                    v.animate().scaleX(1f).scaleY(1f).setDuration(100).start();
                    return false;
            }
            return false;
        });

        toc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Uri rate = Uri.parse("https://skillpro.site/terms-of-service");
                Intent intent = new Intent(Intent.ACTION_VIEW, rate);
                startActivity(intent);

            }
        });

        pp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Uri rate = Uri.parse("https://skillpro.site/privacy-policy");
                Intent intent = new Intent(Intent.ACTION_VIEW, rate);
                startActivity(intent);

            }
        });


    }


    private void signIn() {


        Intent signInIntent = mGoogleSignInClient.getSignInIntent();
        startActivityForResult(signInIntent, RC_SIGN_IN);

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == RC_SIGN_IN) {

            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            handleSignIn(task);
        }

    }

    private void handleSignIn(Task<GoogleSignInAccount> completedTask) {

        try {
            GoogleSignInAccount account = completedTask.getResult(ApiException.class);
            assert account != null;
            firebaseAuthWithGoogle(account);

        } catch (ApiException e) {

            Toast.makeText(this, "Failed to sign in" + e, Toast.LENGTH_SHORT).show();
        }

    }

    private void firebaseAuthWithGoogle(GoogleSignInAccount acct) {

        AuthCredential credential = GoogleAuthProvider.getCredential(acct.getIdToken(), null);
        mAuth.signInWithCredential(credential)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {

                            FirebaseUser mUser = FirebaseAuth.getInstance().getCurrentUser();
                            mUser.getIdToken(true).addOnCompleteListener(new OnCompleteListener<GetTokenResult>() {
                                public void onComplete(@NonNull Task<GetTokenResult> task) {
                                    if (task.isSuccessful()) {
                                        String idToken = task.getResult().getToken();
                                        Log.d("RISHAV", "onComplete: " + idToken);
                                        LoginonNodeapp(idToken, currentUser);

                                    } else {

                                        Toast.makeText(LoginActivity.this, (CharSequence) task.getException(), Toast.LENGTH_SHORT).show();


                                    }
                                }
                            });

                        } else {

                            Log.d("TAG", "loginissuccess");


                        }

                    }
                });


    }





    private void LoginonNodeapp(String idToken, FirebaseUser user) {


        Thread thread = new Thread(new Runnable() {

            @Override
            public void run() {


                OkHttpClient client = new OkHttpClient().newBuilder()
                        .build();
                MediaType mediaType = MediaType.parse("application/json");
                RequestBody body = RequestBody.create(mediaType, "{ \"idToken\" : \"" + idToken + "\"}");
                Request request = new Request.Builder()
                        .url(RetrofitAPI.BASE_URL + "auth/login")
                        .method("POST", body)
                        .addHeader("Content-Type", "application/json")
                        .addHeader("Cookie", "session=" + idToken + "")
                        .build();


                try {
                    Response response = client.newCall(request).execute();

                    String resBody = response.body().string();
                    JSONObject myResponse = new JSONObject(resBody);


                    Log.d("RISHAV", "run: " + myResponse.toString());

                    int statuscode = Integer.parseInt(myResponse.getString("status"));


                    if (statuscode == 429) {


                        runOnUiThread(new Runnable() {
                            public void run() {

                                loadingDialog.dismiss();
                                mAuth.signOut();

                                AlertDialog.Builder alertDialog = new AlertDialog.Builder(LoginActivity.this).setCancelable(false);

                                alertDialog.setMessage("Please try after some time!");


                                // Setting Positive Yes Button
                                alertDialog.setPositiveButton("Ok",
                                        new DialogInterface.OnClickListener() {

                                            public void onClick(DialogInterface dialog,
                                                                int which) {

                                                recreate();
                                                finish();

                                            }
                                        });
                                alertDialog.show();

                            }

                        });


                    } else if (statuscode == 200) {

                        List sessiosMap = response.headers("Set-Cookie");
                        String sessionCookie = sessiosMap.get(0).toString().split(";")[0];

                        token = sessionCookie;
                        logintoappfunction(sessionCookie, user);


                    }


                } catch (IOException | JSONException e) {
                    System.out.println("error" + e.getMessage());
                    e.printStackTrace();

                }


            }

        });
        thread.start();


    }


    private void logintoappfunction(String idToken, FirebaseUser user) {


        Thread thread = new Thread(new Runnable() {


            @Override
            public void run() {
                JSONObject jsonObject = new JSONObject();
                try {
                    jsonObject.put("androidId", androidId);
                    jsonObject.put("referCode", randomReferCode);
                    jsonObject.put("utm_source", utmSource != null ? utmSource : "");  // Handle null case
                    jsonObject.put("utm_medium", utmMedium != null ? utmMedium : "");
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                OkHttpClient client = new OkHttpClient().newBuilder()
                        .build();
                MediaType mediaType = MediaType.parse("application/json");
//                RequestBody body = RequestBody.create(mediaType,
//                        "{ \"androidId\":\"" + androidId + "\" ,\"referCode\":\"" + randomReferCode + "\"}");

                RequestBody body = RequestBody.create(mediaType, jsonObject.toString());

                Request request = new Request.Builder()
                        .url(RetrofitAPI.BASE_URL + "login")
                        .method("POST", body)
                        .addHeader("Content-Type", "application/json")
                        .addHeader("Cookie", idToken)
                        .build();
                try {
                    Response response = client.newCall(request).execute();
                    String resBody = response.body().string();
                    JSONObject myResponse = new JSONObject(resBody);



                    int STATUSCODE = Integer.parseInt(myResponse.getString("statuscode"));



                    if (STATUSCODE == 200) {

                        if (LoginActivity.this != null) {
                            SharedPreferences sharedPreferences = getSharedPreferences("cookie", MODE_PRIVATE);
                            SharedPreferences.Editor myEdit = sharedPreferences.edit();
                            myEdit.putString("cookie", idToken);
                            myEdit.commit();

                            referActivity(user, idToken);
                        }



                    } else if (STATUSCODE == 202) {

                        if (LoginActivity.this != null) {
                            SharedPreferences sharedPreferences = getSharedPreferences("cookie", MODE_PRIVATE);
                            SharedPreferences.Editor myEdit = sharedPreferences.edit();
                            myEdit.putString("cookie", idToken);
                            myEdit.commit();
                            startActivity();

                        }


                    } else if (STATUSCODE == 401) {

                        runOnUiThread(new Runnable() {
                            public void run() {

                                loadingDialog.dismiss();
                                mAuth.signOut();


                                errordialog("This device is already registered with another account. Please try with another device.");


                            }

                        });

                    } else if (STATUSCODE == 400 || STATUSCODE == 500) {

                        String message = myResponse.getString("message");




                        loadingDialog.dismiss();
                        mAuth.signOut();

                        errordialog(message);



                    }


                } catch (IOException | JSONException e) {
                    e.printStackTrace();
                    Log.d("RISHAV", "run: "+e.getMessage());

                }

            }

        });
        thread.start();


    }


    private void errordialog(String message) {

        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                if (loadingDialog.isShowing()) {
                    loadingDialog.dismiss();
                }


                BottomSheetDialog bottomSheetDialog = new BottomSheetDialog(LoginActivity.this);
                View sheetView = LayoutInflater.from(LoginActivity.this).inflate(R.layout.errordialog, null);

                Window window = bottomSheetDialog.getWindow();
                if (window != null) {
                    // Change navigation bar color when the bottom sheet is opened
                    window.setNavigationBarColor(ContextCompat.getColor(LoginActivity.this, R.color.white));
                }

                bottomSheetDialog.setContentView(sheetView);
                bottomSheetDialog.setCancelable(false);

                TextView messagetxt = sheetView.findViewById(R.id.message);
                LinearLayout close = sheetView.findViewById(R.id.btn);

                messagetxt.setText(message);

                close.setOnClickListener(v -> {
                    // Restore original navigation bar color when closing
                    if (window != null) {
                        window.setNavigationBarColor(ContextCompat.getColor(LoginActivity.this, R.color.white));
                    }
                    finish();
                    bottomSheetDialog.dismiss();
                });

                bottomSheetDialog.setOnDismissListener(dialog -> {
                    // Ensure navigation bar color is restored even if dismissed externally
                    if (window != null) {
                        window.setNavigationBarColor(ContextCompat.getColor(LoginActivity.this, R.color.white));
                    }
                });

                bottomSheetDialog.show();

            }
        });
    }




    private void startActivity() {
        loadingDialog.dismiss();
        finish();
        startActivity(new Intent(LoginActivity.this, MainActivity.class));

    }



    private  void referActivity (FirebaseUser user, String  idToken){





        loadingDialog.dismiss();
        Intent myIntent = new Intent(LoginActivity.this, MainActivity.class);
        finish();
        startActivity(myIntent);
    }


    private void getInstallReferrer() {
        referrerClient = InstallReferrerClient.newBuilder(this).build();
        referrerClient.startConnection(new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                switch (responseCode) {
                    case InstallReferrerClient.InstallReferrerResponse.OK:
                        try {
                            ReferrerDetails response = referrerClient.getInstallReferrer();
                            String referrerUrl = response.getInstallReferrer();
                            Log.d(TAG, "Referrer URL: " + referrerUrl);

                            // Extract utm_source & utm_medium
                            utmSource = getQueryParameter(referrerUrl, "utm_source");
                            utmMedium = getQueryParameter(referrerUrl, "utm_medium");

                            Log.d(TAG, "utm_source: " + utmSource);
                            Log.d(TAG, "utm_medium: " + utmMedium);

                            referrerClient.endConnection();
                        } catch (Exception e) {
                            Log.e(TAG, "Install Referrer Error: " + e.getMessage());
                        }
                        break;
                    case InstallReferrerClient.InstallReferrerResponse.FEATURE_NOT_SUPPORTED:
                        Log.e(TAG, "Install Referrer not supported.");
                        break;
                    case InstallReferrerClient.InstallReferrerResponse.SERVICE_UNAVAILABLE:
                        Log.e(TAG, "Install Referrer service unavailable.");
                        break;
                    default:
                        Log.e(TAG, "Install Referrer failed with code: " + responseCode);
                }
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                Log.e(TAG, "Install Referrer service disconnected.");
            }
        });
    }

    // Helper method to extract parameters from the referrer URL
    private String getQueryParameter(String url, String key) {
        if (url == null || !url.contains(key + "=")) return null;
        String[] params = url.split("&");
        for (String param : params) {
            if (param.startsWith(key + "=")) {
                return param.split("=")[1];
            }
        }
        return null;
    }



}

