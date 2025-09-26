package com.app.skill.pro;

import android.app.Dialog;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;


import com.app.skill.pro.classes.RetrofitAPI;
import com.app.skill.pro.fragments.HomeFragment;
import com.app.skill.pro.fragments.ProgressFragment;
import com.bumptech.glide.Glide;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;


import de.hdodenhof.circleimageview.CircleImageView;



public class MainActivity extends AppCompatActivity implements BottomNavigationView.OnNavigationItemSelectedListener {

    BottomNavigationView bottomNavigationView;

    private DrawerLayout drawerLayout;

    HomeFragment homeFragment = new HomeFragment();


    ProgressFragment progressFragment = new ProgressFragment();


    private boolean doubleBackToExitPressedOnce = false;


    private Dialog loadingDialog;


    private FirebaseUser currentUser;

    private FirebaseAuth mAuth;



    LinearLayout pp, toc, contactus, refundpolicy, share;


    private boolean isFirstResume = true; // initialize true


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.hide();
        }


        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setNavigationBarColor(getResources().getColor(R.color.white));
            window.setStatusBarColor(getResources().getColor(R.color.white));

            // Set status bar icons to dark
//            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
//                View decor = window.getDecorView();
//                decor.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
//            }
        }


        mAuth = FirebaseAuth.getInstance();
        currentUser = mAuth.getCurrentUser();

        bottomNavigationView = findViewById(R.id.bottomNavigationView);

        TextView nametxt = findViewById(R.id.name);
        TextView email = findViewById(R.id.email);

        nametxt.setText(currentUser.getDisplayName());
        email.setText(currentUser.getEmail());


        loadingDialog = new Dialog(this);
        loadingDialog.setContentView(R.layout.loading_dialog);
        loadingDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        loadingDialog.setCancelable(false);


        bottomNavigationView.setOnNavigationItemSelectedListener(this);



        homeFragment = new HomeFragment();

        Intent i = getIntent();

        String path = i.getStringExtra("fragment");

        if (path != null) {


        } else {
            bottomNavigationView.setSelectedItemId(R.id.home);
            getSupportFragmentManager().beginTransaction().replace(R.id.container, homeFragment).commit();

        }

        drawerLayout = findViewById(R.id.drawerLayout);


        ImageView menuIcon = findViewById(R.id.menuIcon);
        menuIcon.setOnClickListener(v -> {
            if (drawerLayout != null) {
                drawerLayout.openDrawer(GravityCompat.START);
            }
        });

        String photo = String.valueOf(currentUser.getPhotoUrl());


        CircleImageView userProfile = findViewById(R.id.userProfile);

        Glide.with(this)
                .load(photo)
                .into(userProfile);

        String name = currentUser.getDisplayName();
        if (name != null && name.length() > 12) {
            name = name.substring(0, 12);
        }



        loadingDialog = new Dialog(this);
        loadingDialog.setContentView(R.layout.loading_dialog);
        loadingDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        loadingDialog.setCancelable(false);
//        loadingDialog.show();



        pp = findViewById(R.id.pp);
        toc = findViewById(R.id.termsandconditions);
        contactus = findViewById(R.id.supportus);
        refundpolicy = findViewById(R.id.refundpolicy);
        share = findViewById(R.id.share);

        pp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openPolicy(1); // Privacy Policy
            }
        });

        toc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openPolicy(2); // Terms of Service
            }
        });

        refundpolicy.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openPolicy(3); // Refund Policy
            }
        });

        contactus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openPolicy(4); // Contact Us
            }
        });




        share.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String shareBody = "Check out this amazing app: https://play.google.com/store/apps/details?id=com.app.skill.pro";
                Intent sharingIntent = new Intent(Intent.ACTION_SEND);
                sharingIntent.setType("text/plain");
                sharingIntent.putExtra(Intent.EXTRA_SUBJECT, "Share App");
                sharingIntent.putExtra(Intent.EXTRA_TEXT, shareBody);
                startActivity(Intent.createChooser(sharingIntent, "Share via"));
            }
        });



//
//        LinearLayout contactus = findViewById(R.id.contactus);
//
//        contactus.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                try {
//                    Intent intent = new Intent(Intent.ACTION_VIEW);
//                    intent.setData(Uri.parse("mailto:cashadda@appzest.io")); // Opens the Gmail app
//                    startActivity(intent);
//                } catch (ActivityNotFoundException e) {
//                    // Handle the case where Gmail is not available
//                    Toast.makeText(view.getContext(), "No email app found!", Toast.LENGTH_SHORT).show();
//                }
//            }
//        });









    }



    @Override
    public void onBackPressed() {
        if (drawerLayout.isDrawerOpen(GravityCompat.START)) {
            drawerLayout.closeDrawer(GravityCompat.START); // Close drawer if open
        } else if (homeFragment != null && homeFragment.isVisible()) {
            if (doubleBackToExitPressedOnce) {
                super.onBackPressed();
                finish();// Exit the app
                return;
            }

            this.doubleBackToExitPressedOnce = true;
            Toast.makeText(this, "Press back again to exit", Toast.LENGTH_SHORT).show();

            new Handler(Looper.getMainLooper()).postDelayed(() -> {
                doubleBackToExitPressedOnce = false;
            }, 2000); // Reset after 2 seconds
        } else {
            bottomNavigationView.setSelectedItemId(R.id.home); // Navigate to Home
            getSupportFragmentManager().beginTransaction().replace(R.id.container, homeFragment).commit();
        }
    }


    private int lastSelectedTab = R.id.home; // Default to Home

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        int itemId = item.getItemId();

        if (itemId == R.id.home || itemId == R.id.progress) {
            lastSelectedTab = itemId;
        }

        if (itemId == R.id.home) {
            getSupportFragmentManager().beginTransaction().replace(R.id.container, homeFragment).addToBackStack(null).commit();
            return true;
        } else if (itemId == R.id.progress) {
            getSupportFragmentManager().beginTransaction().replace(R.id.container, progressFragment).addToBackStack(null).commit();
            return true;

        } else if (itemId == R.id.pro) {

            Intent intent = new Intent(MainActivity.this, VipActivity.class);
            startActivity(intent);

        }
        return false;
    }



    @Override
    public void onResume(){
        super.onResume();
        if (isFirstResume) {
            isFirstResume = false; // skip calling usersDetails() the first time
        } else {
        }
    }

    private void openPolicy(int policyType) {
        Intent intent = new Intent(MainActivity.this, PolicyActivity.class);
        intent.putExtra("policy_type", policyType);
        startActivity(intent);
    }

}