//
//  SocialMessage.h
//  Copyright (c) Click Innovate Ltd. All rights reserved.
//

#import "Foundation/Foundation.h"
#import "MessageUI/MFMailComposeViewController.h"
#import "Cordova/CDVPlugin.h"

@interface SocialMessage : CDVPlugin <MFMailComposeViewControllerDelegate> {

}

- (void) send:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

- (void) sendEmailFallback:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end