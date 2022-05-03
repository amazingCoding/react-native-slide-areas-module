package com.slideareasmodule;

import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.core.view.ViewCompat;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = SlideAreasModuleModule.NAME)
public class SlideAreasModuleModule extends ReactContextBaseJavaModule {
    public static final String NAME = "SlideAreasModule";
    public ReactApplicationContext reactContext;
    public SlideAreasModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    public static void changeBar(Window window,String statusBarTheme,String statusBarColor,String navigationBarTheme,String navigationBarColor,Boolean hideStatus){
      window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS | WindowManager.LayoutParams.FLAG_FULLSCREEN);
      int flag = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE;
      if(statusBarTheme.equals("dark")) flag |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
      if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
        if(navigationBarTheme.equals("dark")) flag |= View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
      }
      window.getDecorView().setSystemUiVisibility(flag);
      int windowFlag = WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS;
      if(hideStatus){
        windowFlag |= WindowManager.LayoutParams.FLAG_FULLSCREEN;
      }
      window.addFlags(windowFlag);
      window.setStatusBarColor(statusBarColor == null ? Color.TRANSPARENT: Color.parseColor(statusBarColor));
      window.setNavigationBarColor(navigationBarColor == null ? Color.TRANSPARENT: Color.parseColor(navigationBarColor));
    }
    @ReactMethod
    public void setBar(String statusBarTheme,String statusBarColor,String navigationBarTheme,String navigationBarColor,Boolean hideStatus){
        reactContext.runOnUiQueueThread(new Runnable() {
          @RequiresApi(api = Build.VERSION_CODES.M)
          @Override
          public void run() {
            if(getCurrentActivity() != null){
              Window window = getCurrentActivity().getWindow();
              SlideAreasModuleModule.changeBar(window,statusBarTheme,statusBarColor,navigationBarTheme,navigationBarColor,hideStatus);
            }
          }
        });
    }
    public static native void nativeSetBar(String statusBarTheme,String statusBarColor,String navigationBarTheme,String navigationBarColor,Boolean hideStatus);
}
