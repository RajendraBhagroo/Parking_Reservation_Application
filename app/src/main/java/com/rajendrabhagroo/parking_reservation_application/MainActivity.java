package com.rajendrabhagroo.parking_reservation_application;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.google.firebase.analytics.FirebaseAnalytics;

public class MainActivity extends AppCompatActivity {

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Obtain FirebaseAnalytics Instance.
        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

    }

}
