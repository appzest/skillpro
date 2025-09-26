package com.app.skill.pro;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

public class PolicyActivity extends AppCompatActivity {

    WebView policyWebView;

    private Dialog loadingDialog;


    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_policy); // Updated layout with WebView

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


        loadingDialog = new Dialog(PolicyActivity.this);
        loadingDialog.setContentView(R.layout.loading_dialog);
        loadingDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        loadingDialog.setCancelable(false);
        loadingDialog.show();

        policyWebView = findViewById(R.id.policyWebView);
        policyWebView.setWebViewClient(new WebViewClient());
        policyWebView.getSettings().setJavaScriptEnabled(true);

        // Get value from intent and load the appropriate URL
        int policyType = getIntent().getIntExtra("policy_type", 0);
        String url = getPolicyUrl(policyType);
        policyWebView.loadUrl(url);

        policyWebView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                if (loadingDialog.isShowing()) {
                    loadingDialog.dismiss();
                }
            }
        });
    }

    private String getPolicyUrl(int type) {
        switch (type) {
            case 1:
                return "https://skillpro.site/privacy-policy"; // Privacy Policy
            case 2:
                return "https://skillpro.site/terms-of-service"; // Terms of Service
            case 3:
                return "https://skillpro.site/refund-policy"; // Refund Policy
            case 4:
                return "https://skillpro.site/contact-us"; // Contact Us
            default:
                return  null; // Default fallback
        }
    }
}
