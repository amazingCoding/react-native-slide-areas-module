#import "SlideAreasModule.h"

@implementation SlideAreasModule
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(setBar){
  NSLog(@"testLog");
}
RCT_EXPORT_METHOD(setBar:(NSString *)statusBarTheme hideStatus:(BOOL)hideStatus){
    [[NSOperationQueue mainQueue] addOperationWithBlock:^{
        if(![statusBarTheme isEqual: @"dark"]){
            [UIApplication sharedApplication].statusBarStyle = UIStatusBarStyleLightContent;
        }
        else{
            if (@available(iOS 13.0, *)) {
                [UIApplication sharedApplication].statusBarStyle = UIStatusBarStyleDarkContent;
            } else {
                [UIApplication sharedApplication].statusBarStyle = UIStatusBarStyleDefault;
            }
        }
        [[UIApplication sharedApplication] setStatusBarHidden:hideStatus withAnimation:UIStatusBarAnimationNone];
    }];
    
}
@end
