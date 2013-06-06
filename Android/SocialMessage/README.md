Social Message
==============

Cordova / PhoneGap Plugin for Android to utilise native share features.

This plugin is also available for [iOS](https://github.com/ClickInnovate/CordovaPhoneGapPlugins/tree/master/iOS/SocialMessage) and [Windows Phone 8](https://github.com/ClickInnovate/CordovaPhoneGapPlugins/tree/master/Windows%20Phone%208/SocialMessage).


## Prerequisites

This plugin requires [Apache Cordova](http://incubator.apache.org/cordova/).


## Installation

1. Add SocialMessage.java to your project src.

2. Add the social-message.js file to your "www" directory and add reference(s) to social-message.js in your html file(s). This should be done after your reference to the cordova.js file.

3. Add the plugin reference to your config.xml (res/xml/config.xml) by adding the following child element to the &lt;plugins&gt; element:
		&lt;plugin name="SocialMessage" value="com.clickinnovate.SocialMessage" /&gt;

## Usage

After your deviceready event has been fired, you can simply pass your message as an argument:

	window.plugins.socialmessage.send("This is a test message");

Which will allow the message to be shared using the native share features available on Android.


<br/> <br/>

Copyright [Click Innovate](http://www.clickinnovate.com/).


## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.