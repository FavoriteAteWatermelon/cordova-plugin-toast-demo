package com.lmr.android;

import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;

/**
 * ToastDemo
 *
 * @author lmr
 * @date 2018-08-19
 */
public class ToastDemo extends CordovaPlugin {

    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        if ("show".equals(action)){
            // 获取activity和context --> cordova.getActivity()和cordova.getContext()
            Toast.makeText(cordova.getActivity(),args.getString(0),Toast.LENGTH_SHORT).show();
            return true;
        }
        return false;
    }
}
