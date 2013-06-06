SMS Message
===========

Cordova / PhoneGap Plugin for iOS to utilise SMS text messaging.


## Prerequisites

This plugin requires [Apache Cordova](http://incubator.apache.org/cordova/) and Xcode.


## Installation

1. Add the SMSMessage.h and SMSMessage.m files to Plugins directory in your Xcode project.
2. Add the sms-message.js file to your "www" directory and add reference(s) to sms-message.js in your html file(s). This should be done after your reference to the cordova.js file.
3. Add the plugin reference.
	- If using Cordova <= 2.2.0: Open the Cordova.plist under the Resources directory in your Xcode project. Add an identical key and value of SMSMessage.
	- If using Cordova >= 2.3.0: Open the config.xml and add the following child element to the &lt;plugins&gt; element:
		&lt;plugin name="SMSMessage" value="SMSMessage" /&gt;
4. Add a reference to MessageUI.framework under "linked frameworks and libraries" in your target.


## Usage

After your deviceready event has been fired, you can simply pass your message as an argument:

	window.plugins.smsmessage.send("This is a test message", "07123456789");

Which will allow the message to be sent to a single recipient.

If you want to send to multiple recipients, you can send comma delimited numbers as a string:

	window.plugins.smsmessage.send("This is a test message", "07123456789,07987654321");


## Note

This will work on all versions of iOS. Please check out our Social Message plugin, which includes SMS text messaging for iOS >=6.
It it worth mentioning that you can't send SMS messages from the simulator (this is handled with a notification).

Copyright [Click Innovate](http://www.clickinnovate.com/).


## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.