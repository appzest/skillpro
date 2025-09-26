package com.app.skill.pro;

import android.app.Application;
import android.content.SharedPreferences;

import androidx.appcompat.app.AppCompatDelegate;

import com.onesignal.Continue;
import com.onesignal.OneSignal;
import com.onesignal.notifications.IDisplayableNotification;


public class ApplicationClass extends Application {

    private static final String ONESIGNAL_APP_ID = "0973e059-cef9-4977-bbce-2ef4ed2cd6d5";




    @Override
    public void onCreate() {
        super.onCreate();

        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);

        OneSignal.initWithContext(this, ONESIGNAL_APP_ID);
        OneSignal.getNotifications().requestPermission(false, Continue.none());



        OneSignal.getNotifications().addClickListener(event -> {
            IDisplayableNotification notification = (IDisplayableNotification) event.getNotification();
            SharedPreferences prefs = getSharedPreferences("notifications", MODE_PRIVATE);
            SharedPreferences.Editor editor = prefs.edit();

            if (notification.getAdditionalData() != null) {

                String actionType = notification.getAdditionalData().optString("action_type", null);

                if (actionType != null) {
                    if (actionType.equals("adjoe")) {
                        editor.putInt("OFFERWALL_CODE", 1);
                    } else if (actionType.startsWith("task_")) {
                        try {
                            int taskCode = Integer.parseInt(actionType.split("_")[1]);
                            editor.putInt("OFFERWALL_CODE", taskCode);
                        } catch (NumberFormatException e) {
                            e.printStackTrace();
                        }
                    }
                }


                editor.apply();

            }


        });


//        HyBid.initialize("d2f2f4e1b89e43d89c7b652ac0f7aef7", this);

    }
}
