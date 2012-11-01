//
//  SMSMessage.m
//  Copyright (c) Click Innovate Ltd. All rights reserved.
//

#import "SMSMessage.h"
#import "MessageUI/MessageUI.h"
#import "MessageUI/MFMessageComposeViewController.h"

@implementation SMSMessage

- (void) send:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{
	NSString *message = [options objectForKey:@"message"];
	NSArray *recipients = [[options objectForKey:@"recipients"] componentsSeparatedByString:@","];

	Class messageClass = (NSClassFromString(@"MFMessageComposeViewController"));
	
	if (messageClass == nil || (messageClass != nil && ![messageClass canSendText])) 
	{
		UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"SMS Message" message:@"Unable to send SMS Messages from this device." delegate:self cancelButtonTitle:@"OK" otherButtonTitles: nil];
		[alert show];
		[alert release];
		return;
	}
	
	MFMessageComposeViewController *sender = [[MFMessageComposeViewController alloc] init];
	sender.messageComposeDelegate = self;
	
	if (message != nil)
	{
		sender.body = message;
	}
	
	if (recipients != nil)
	{
		[sender setRecipients:recipients];
	}
	
	[self.viewController presentModalViewController:sender animated:YES];
	[sender release];
}

- (void)messageComposeViewController:(MFMessageComposeViewController*)controller didFinishWithResult:(MessageComposeResult)result
{
	[self.viewController dismissModalViewControllerAnimated:YES];
}

@end