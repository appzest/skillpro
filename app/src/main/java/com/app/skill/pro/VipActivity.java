package com.app.skill.pro;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.os.Looper;
import android.view.LayoutInflater;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatImageView;
import androidx.core.content.ContextCompat;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.app.skill.pro.classes.RetrofitAPI;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.bottomsheet.BottomSheetDialog;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GetTokenResult;

import java.io.IOException;
import java.util.Calendar;
import java.util.List;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class VipActivity extends AppCompatActivity {

    FirebaseAuth auth;
    FirebaseUser user;

    private com.app.skill.pro.classes.RetrofitAPI RetrofitAPI;

    String cok;
    String idToken;

    private CountDownTimer countDownTimer;

    LinearLayout layoutLeft, layoutCenter, layoutRight;
    TextView btnGetPro, tvTimerHour, tvTimerMinutes, tvTimerSecs;

    AppCompatImageView btnClose;

    private String selectedPrice = "499";
    private String selectedValidity = "Lifetime";

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pro);

        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) actionBar.hide();

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(Color.TRANSPARENT); // Make status bar transparent
            window.setNavigationBarColor(Color.WHITE);   // Optional: you can also use transparent
        }

// ✅ Make status bar icons white (i.e., remove light mode)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            View decor = getWindow().getDecorView();
            decor.setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    // No LIGHT_STATUS_BAR flag here → icons remain white
            );
        }

// ✅ For Android 11+ (optional but recommended)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            getWindow().setDecorFitsSystemWindows(false); // Allow content behind bars
        }

        auth = FirebaseAuth.getInstance();
        user = auth.getCurrentUser();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(RetrofitAPI.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        RetrofitAPI = retrofit.create(RetrofitAPI.class);

        // Initialize views using findViewById
        layoutCenter = findViewById(R.id.layoutCenter);
        layoutLeft = findViewById(R.id.layoutLeft);
        layoutRight = findViewById(R.id.layoutRight);
        btnGetPro = findViewById(R.id.btnGetPro);
        tvTimerHour = findViewById(R.id.tvTimerHour);
        tvTimerMinutes = findViewById(R.id.tvTimerMinutes);
        tvTimerSecs = findViewById(R.id.tvTimerSecs);
        btnClose = findViewById(R.id.btnClose);

        btnClose.setOnClickListener(v -> {
            finish();
        });

        start24HourTimer();

        // Left card - 49 / 1 week
        layoutLeft.setOnClickListener(v -> {
            activateCard(layoutLeft, layoutCenter, layoutRight, "Add to cart");
            selectedPrice = "49";
            selectedValidity = "1 Week";
        });

// Center card - 499 / Lifetime
        layoutCenter.setOnClickListener(v -> {
            activateCard(layoutCenter, layoutLeft, layoutRight, "Add to cart");
            selectedPrice = "499";
            selectedValidity = "Lifetime";
        });

// Right card - 199 / 1 month
        layoutRight.setOnClickListener(v -> {
            activateCard(layoutRight, layoutCenter, layoutLeft, "Add to cart");
            selectedPrice = "199";
            selectedValidity = "1 Month";
        });

        btnGetPro.setOnClickListener(v -> {
            if (selectedPrice.isEmpty() || selectedValidity.isEmpty()) {
                Toast.makeText(VipActivity.this, "Please select a plan", Toast.LENGTH_SHORT).show();
                return;
            }

            Intent intent = new Intent(VipActivity.this, CheckoutActivity.class);
            intent.putExtra("PLAN_NAME", "Skill Pro Membership");
            intent.putExtra("PRICE", selectedPrice);
            intent.putExtra("VALIDITY", selectedValidity);
            startActivity(intent);
        });

    }



    private void activateCard(View activeCard, View inActiveCardOne, View inActiveCardTwo, String btnMessage) {
        activeCard.setBackgroundResource(R.drawable.bg_card_selected);
        inActiveCardOne.setBackgroundResource(R.drawable.bg_card_unselected);
        inActiveCardTwo.setBackgroundResource(R.drawable.bg_card_unselected);

        activeCard.setElevation(10f);
        inActiveCardOne.setElevation(1f);
        inActiveCardTwo.setElevation(0f);

        btnGetPro.setText(btnMessage);
    }

    private void start24HourTimer() {
        long millisIn24Hours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        countDownTimer = new CountDownTimer(millisIn24Hours, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                long seconds = millisUntilFinished / 1000;

                long hours = seconds / 3600;
                long minutes = (seconds % 3600) / 60;
                long secs = seconds % 60;

                tvTimerHour.setText(String.format("%02d", hours));
                tvTimerMinutes.setText(String.format("%02d", minutes));
                tvTimerSecs.setText(String.format("%02d", secs));
            }

            @Override
            public void onFinish() {
                tvTimerHour.setText("00");
                tvTimerMinutes.setText("00");
                tvTimerSecs.setText("00");
                Toast.makeText(VipActivity.this, "Offer expired!", Toast.LENGTH_SHORT).show();
            }
        };

        countDownTimer.start();
    }

    @Override
    protected void onDestroy() {
        if (countDownTimer != null) {
            countDownTimer.cancel();
        }
        super.onDestroy();
    }
}








