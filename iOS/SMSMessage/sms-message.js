(function (cordova) {

	var SMSMessage = function () {

	};

	SMSMessage.prototype.send = function (message, recipients) {
		if (device.platform.toLowerCase().indexOf("simulator") > -1) {
			navigator.notification.alert("You must use an actual device to send SMS messages.", null, "Simulator Detected", "OK");
			return;
		}
		var options = {
			"message": message,
			"recipients": recipients
		};
		cordova.exec(null, null, "SMSMessage", "send", [options]);
	};

	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.smsmessage = new SMSMessage();

}(window.cordova || window.Cordova || window.PhoneGap));