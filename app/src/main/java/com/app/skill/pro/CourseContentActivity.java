package com.app.skill.pro;

import android.annotation.SuppressLint;
import android.os.Build;
import android.os.Bundle;
import android.text.Html;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.app.skill.pro.Model.ContentModel;
import com.app.skill.pro.R;
import com.app.skill.pro.classes.SectionPrefs;
import com.app.skill.pro.classes.TypeWriter;

import java.util.ArrayList;
import java.util.List;

public class CourseContentActivity extends AppCompatActivity {

    private List<ContentModel> contents;
    private int currentIndex = 0;

    private TextView titleView, contentHtml;
    private LinearLayout nextButton;
    private LinearLayout progressContainer;
    private List<ProgressBar> progressBars = new ArrayList<>();

    private TypeWriter typeWriter;

    private boolean isTypingComplete = false;



    private int courseId;
    private int sectionIndex;

    @SuppressLint({"SetTextI18n", "MissingInflatedId"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_course_content);

        // Initialize views
        titleView = findViewById(R.id.contentTitle);
        contentHtml = findViewById(R.id.contentHtml);
        nextButton = findViewById(R.id.nextButton);
        progressContainer = findViewById(R.id.progressContainer);


        typeWriter = new TypeWriter(contentHtml);
        typeWriter.setCharacterDelay(20);

        // Hide action bar
        androidx.appcompat.app.ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.hide();
        }

        // Set transparent status bar
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setNavigationBarColor(getResources().getColor(R.color.white));
            window.setStatusBarColor(getResources().getColor(R.color.white));
        }

        // Receive data
        contents = (List<ContentModel>) getIntent().getSerializableExtra("contents");
        courseId = getIntent().getIntExtra("courseId", 0);
        sectionIndex = getIntent().getIntExtra("sectionIndex", 0);

        if (contents == null || contents.isEmpty()) {
            Toast.makeText(this, "No content found", Toast.LENGTH_SHORT).show();
            finish();
            return;
        }

        // Setup UI
        createProgressBars(contents.size());
        loadContent(currentIndex);

        nextButton.setOnClickListener(v -> {
            if (!isTypingComplete) {
                nextButton.setVisibility(View.GONE);
                return;
            }

            currentIndex++;
            if (currentIndex < contents.size()) {
                fillProgressBar(currentIndex);
                loadContent(currentIndex);
            } else {
                showCompletionDialog();
            }
        });

        findViewById(R.id.backBtn).setOnClickListener(v -> onBackPressed());
    }

    private void loadContent(int index) {
        ContentModel item = contents.get(index);
        titleView.setText(item.getTitle());

        CharSequence html;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            html = Html.fromHtml(item.getContent(), Html.FROM_HTML_MODE_COMPACT);
        } else {
            html = Html.fromHtml(item.getContent());
        }

        isTypingComplete = false;
        nextButton.setEnabled(true);
        nextButton.setVisibility(View.GONE);

        typeWriter.setOnTypingCompleteListener(() -> {
            isTypingComplete = true;
            nextButton.setVisibility(View.VISIBLE);
        });

        typeWriter.animateText(html);
    }

    private void createProgressBars(int count) {
        progressContainer.removeAllViews();
        progressBars.clear();

        for (int i = 0; i < count; i++) {
            ProgressBar pb = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
            LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(0, 20, 1f);
            params.setMarginEnd(12);
            pb.setLayoutParams(params);
            pb.setMax(1);
            pb.setProgress(i == 0 ? 1 : 0);
            pb.setProgressDrawable(getResources().getDrawable(R.drawable.progress_bar_drawable));
            pb.setBackground(null);
            progressBars.add(pb);
            progressContainer.addView(pb);
        }
    }

    private void fillProgressBar(int index) {
        if (index >= 0 && index < progressBars.size()) {
            progressBars.get(index).setProgress(1);
        }
    }

    @Override
    public void onBackPressed() {
        if (currentIndex < contents.size() - 1) {
            showQuitDialog();
        } else {
            super.onBackPressed();
        }
    }

    private void showQuitDialog() {
        new androidx.appcompat.app.AlertDialog.Builder(this)
                .setTitle("Quit course?")
                .setMessage("You will lose your progress in the ongoing topic.")
                .setCancelable(true)
                .setNegativeButton("Cancel", (dialog, which) -> dialog.dismiss())
                .setPositiveButton("Quit", (dialog, which) -> super.onBackPressed())
                .show();
    }

    private void showCompletionDialog() {
        new androidx.appcompat.app.AlertDialog.Builder(this)
                .setTitle("Congratulations 🎉")
                .setMessage("You've completed this topic.")
                .setCancelable(false)
                .setPositiveButton("OK", (dialog, which) -> {
                    SectionPrefs.setCompletedSection(this, courseId, sectionIndex);
                    finish();
                })
                .show();
    }


}
