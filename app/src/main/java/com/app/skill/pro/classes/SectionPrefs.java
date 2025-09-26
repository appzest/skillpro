package com.app.skill.pro.classes;

// SectionPrefs.java
import static android.content.ContentValues.TAG;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

public class SectionPrefs {
    private static final String PREF_NAME = "section_pref";

    // Store completed section index per courseId
    public static void setCompletedSection(Context context, int courseId, int sectionIndex) {
        SharedPreferences prefs = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        prefs.edit().putInt("completed_section_" + courseId, sectionIndex).apply();
    }

    public static int getCompletedSection(Context context, int courseId) {
        SharedPreferences prefs = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        Log.d(TAG, "getCompletedSection: " + courseId);
        return prefs.getInt("completed_section_" + courseId, 0); // default = 0
    }
}

