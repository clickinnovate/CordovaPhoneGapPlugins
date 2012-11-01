//
//  SMSMessage.h
//  Copyright (c) Click Innovate Ltd. All rights reserved.
//

#import "Foundation/Foundation.h"
#import "MessageUI/MessageUI.h"
#import "MessageUI/MFMessageComposeViewController.h"
#import "Cordova/CDVPlugin.h"

@interface SMSMessage : CDVPlugin <MFMessageComposeViewControllerDelegate> {

}

- (void) send:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end