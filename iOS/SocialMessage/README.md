### NOTE: This plugin is now outdated. If you're using Cordova >= 3.0.0 please see the new plugin [here](https://github.com/leecrossley/cordova-plugin-social-message).

Social Message
==============

Cordova / PhoneGap Plugin for iOS to utilise native share features using built in activity types.

Supports: Facebook, Twitter, Weibo, Message, Email, Print, Clipboard, Contact, Camera Roll.

This plugin is also available for [Android](https://github.com/ClickInnovate/CordovaPhoneGapPlugins/tree/master/Android/SocialMessage) and [Windows Phone 8](https://github.com/ClickInnovate/CordovaPhoneGapPlugins/tree/master/Windows%20Phone%208/SocialMessage).


## Prerequisites

This plugin requires [Apache Cordova](http://incubator.apache.org/cordova/) and Xcode.


## Installation

1. Add the SocialMessage.h and SocialMessage.m files to Plugins directory in your Xcode project.

2. Add the social-message.js file to your "www" directory and add reference(s) to social-message.js in your html file(s). This should be done after your reference to the cordova.js file.

3. Add the plugin reference.
	- If using Cordova <= 2.2.0: Open the Cordova.plist under the Resources directory in your Xcode project. Add an identical key and value of SocialMessage.
	- If using Cordova >= 2.3.0: Open the config.xml and add the following child element to the &lt;plugins&gt; element:
		&lt;plugin name="SocialMessage" value="SocialMessage" /&gt;

4. Add a reference to MessageUI.framework under "linked frameworks and libraries" in your target. This is required for the email only share fallback (iOS < 6).

## Usage

After your deviceready event has been fired, you can simply pass your message as an argument:

	window.plugins.socialmessage.send("This is a test message");

Which will allow the message to be shared with all built in activity types.

If you want to specify activity types to include, you can add an array argument such as:

	window.plugins.socialmessage.send("This is a test message", ["PostToFacebook", "PostToTwitter"]);
	
This example will only allow the user to post the message to Facebook or Twitter.

A complete list of activity types can be found [here](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIActivity_Class/Reference/Reference.html#//apple_ref/occ/cl/UIActivity). You should omit the "UIActivityType" prefix when adding to your array.


## Note

Native share features are only supported in iOS >= 6 (An email only share fallback has been implemented for iOS < 6).

Copyright [Click Innovate](http://www.clickinnovate.com/).


## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
