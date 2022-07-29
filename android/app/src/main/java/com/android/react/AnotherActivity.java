package com.android.react;
import androidx.appcompat.app.AppCompatActivity;

import android.app.PictureInPictureParams;
import android.os.Build;
import android.os.Bundle;
import android.content.res.Configuration;
import android.util.DisplayMetrics;
import android.util.Rational;
import android.widget.TextView;

public class AnotherActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_another);

        DisplayMetrics displayMetrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
        int height = (int) (displayMetrics.heightPixels / displayMetrics.density);
        int width = (int) (displayMetrics.widthPixels / displayMetrics.density);

        TextView textView = findViewById(R.id.textView2);
        //textView.setText(Integer.toString(width) + " x " + Integer.toString(height));

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                enterPictureInPictureMode(new PictureInPictureParams.Builder()
                        .setAspectRatio(new Rational(1,1))
                        .build());
            }
        }
    }

    @Override
    public void onPictureInPictureModeChanged (boolean isInPictureInPictureMode, Configuration newConfig) {
        if (isInPictureInPictureMode) {
            // Hide the full-screen UI (controls, etc.) while in picture-in-picture mode.
        } else {
            // Restore the full-screen UI.
        }
    }

    // For PIP mode
    // @Override
    // public void onPictureInPictureModeChanged(boolean isInPictureInPictureMode, Configuration newConfig) {
    //     PipAndroidModule.pipModeChanged(isInPictureInPictureMode);
    // }
}