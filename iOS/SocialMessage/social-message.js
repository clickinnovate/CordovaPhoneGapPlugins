(function (cordova) {

	var SocialMessage = function () {

	};

	function getAllActivityTypes() {
		return ["PostToFacebook", "PostToTwitter", "PostToWeibo", "Message",
			"Mail", "Print", "CopyToPasteboard", "AssignToContact", "SaveToCameraRoll"];
	}

	SocialMessage.prototype.send = function (message, activityTypes) {
		if (device.version < 6) {
			emailShareFallback(message);
			return;
		}
		if (typeof (activityTypes) === "undefined" || activityTypes === null) {
			activityTypes = getAllActivityTypes();
		}
		var options = {
			"message": message,
			"activityTypes": activityTypes.join(",")
		};
		cordova.exec(null, null, "SocialMessage", "send", [options]);
	};
	
	function emailShareFallback(message) {
		var options = {
			"message": message,
		};
		cordova.exec(null, null, "SocialMessage", "sendEmailFallback", [options]);
	}

	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.socialmessage = new SocialMessage();

}(window.cordova || window.Cordova || window.PhoneGap));