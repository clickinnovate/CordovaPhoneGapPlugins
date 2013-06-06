/*  
    SocialMessage.cs
    Copyright (c) Click Innovate Ltd. All rights reserved.
*/

using Microsoft.Phone.Tasks;
using WPCordovaClassLib.Cordova.JSON;

namespace WPCordovaClassLib.Cordova.Commands
{
	public class SocialMessage : BaseCommand
	{
		public void send(string message)
		{
			var status = JsonHelper.Deserialize<string[]>(message)[0];
			var shareStatusTask = new ShareStatusTask { Status = status };
			shareStatusTask.Show();
			DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
		}
	}
}