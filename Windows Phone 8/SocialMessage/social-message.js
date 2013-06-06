(function (cordova) {

	var SocialMessage = function () {

	};

	SocialMessage.prototype.send = function (message) {
		cordova.exec(null, null, "SocialMessage", "send", message);
	};

	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.socialmessage = new SocialMessage();

}(window.cordova || window.Cordova || window.PhoneGap));