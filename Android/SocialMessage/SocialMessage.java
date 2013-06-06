//
//  SocialMessage.java
//  Copyright (c) Click Innovate Ltd. All rights reserved.
//

package com.clickinnovate;

import org.json.JSONArray;
import org.json.JSONException;
import android.content.Intent;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

public class SocialMessage extends CordovaPlugin {

	@Override
		public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		doSendIntent(args.getJSONObject(0).getString("message")); 
		return true;
	}

	private void doSendIntent(String message) {
		Intent sendIntent = new Intent(android.content.Intent.ACTION_SEND);
		sendIntent.setType("text/plain");
		sendIntent.putExtra(android.content.Intent.EXTRA_TEXT, message);
		this.cordova.startActivityForResult(this, sendIntent, 0);
	}

}