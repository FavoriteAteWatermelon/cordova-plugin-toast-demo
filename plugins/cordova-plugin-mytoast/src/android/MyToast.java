package com.test.android;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.widget.Toast;
/**
 * This class echoes a string called from JavaScript.
 */

// public class MyToast extends CordovaPlugin {

//   @Override
//   public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
//     // Toast.makeText(cordova.getActivity(),args.getString(0),Toast.LENGTH_SHORT).show();
//       if ("showToast".equals(action)){
//           // 获取activity和context --> cordova.getActivity()和cordova.getContext()
//           Toast.makeText(cordova.getActivity(),args.getString(0),Toast.LENGTH_SHORT).show();
//           return true;
//       }
//       return false;
//   }
// }



public class MyToast extends CordovaPlugin {

    @Override
    public boolean execute(String action,CordovaArgs args, CallbackContext callbackContext) throws JSONException {
    
      if ("showToast".equals(action)) {
          String message = args.getString(0);
          this.showToast(message, callbackContext);
          return true;
      }
      return false;
    }
  
    private void showToast(String message, CallbackContext callbackContext) {
      if (message != null && message.length() > 0) {

        android.widget.Toast.makeText(this.cordova.getActivity(), message, android.widget.Toast.LENGTH_SHORT).show();
          callbackContext.success(message);
      } else {
          callbackContext.error("Expected one non-empty string argument.");
      }
    }
  }