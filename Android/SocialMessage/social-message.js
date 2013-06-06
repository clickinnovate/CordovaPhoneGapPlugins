(function (cordova) {

	var SocialMessage = function () {

	};

	SocialMessage.prototype.send = function (message) {
		var options = {
			"message": message
		};
		cordova.exec(null, null, "SocialMessage", "send", [options]);
	};

	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.socialmessage = new SocialMessage();

}(window.cordova || window.Cordova || window.PhoneGap));