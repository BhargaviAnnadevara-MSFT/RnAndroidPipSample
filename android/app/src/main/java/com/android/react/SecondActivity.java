package com.android.react;
import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SecondActivity extends ReactContextBaseJavaModule {
    SecondActivity(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "SecondActivity";
    }

    @ReactMethod
    public void open() {
        Intent intent = new Intent(getCurrentActivity(), AnotherActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}