package com.example.slideareasmodule;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.slideareasmodule.SlideAreasModuleModule;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SlideAreasModuleExample";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
//    SlideAreasModuleModule.changeBar(getWindow(),"light",null,"dark",null,false);
  }
}
