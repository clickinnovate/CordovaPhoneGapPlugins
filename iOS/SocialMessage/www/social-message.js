/*global window: false */
(function (cordova) {

	"use strict";

	var SocialMessage = function () {

	};

	function getAllActivityTypes() {
		return ["PostToFacebook", "PostToTwitter", "PostToWeibo", "Message",
			"Mail", "Print", "CopyToPasteboard", "AssignToContact", "SaveToCameraRoll"];
	}

	SocialMessage.prototype.send = function (success, failure, message, activityTypes) {
		if (activityTypes !== undefined || activityTypes === null) {
			activityTypes = getAllActivityTypes();
		}
		cordova.exec(success, failure, "SocialMessage", "Send", [message, activityTypes]);
	};

	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.socialmessage = new SocialMessage();

}(window.cordova || window.Cordova || window.PhoneGap));