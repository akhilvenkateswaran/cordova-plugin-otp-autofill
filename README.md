# cordova-plugin-otp-autofill

### Description

This plugin extracts the OTP of required length from the received SMS.


### Supported Platforms

- Android


### Installation

```
cordova plugin add https://github.com/akhilvenkateswaran/cordova-plugin-otp-autofill.git

```
### Usage

```
	var options = {
		otpLength: 4,
		delimiter: 'is',
		senderID: 'WAYSMS',
		timeout: 60
	    }

	smsOtpAutofill.startOTPListener(successCallback,errorCallback,options);


	function successCallback(result) {

	  if(result === 'Resend OTP') {

		  smsOtpAutofill.startOTPListener(successCallback,errorCallback,options);

	  } else {
	  
	  	//Set the result (OTP value) to the field
		
	  }

	}


	function errorCallback(result) {

	}

```
##### delimiter :

This is the text which appears just before the OTP in the SMS content. For example, if the SMS content is 'Your OTP is 6367' , then delimiter should be set to 'is'. The delimiter can also be set with an empty value , incase if the SMS content starts with the OTP.
For example, if the SMS content is '6367 is your one time password', then the delimiter should be set to ' '.

##### length :
 
This is the length of the OTP to be extracted from the SMS. For example, if the SMS content is 'Your OTP is 6367', the length should be set to 4.

##### senderID :

This is the 6-character sender ID of the received SMS. For example, if the sender name of the received SMS is 'QP-WAYSMS' , then the senderID should be set to 'WAYSMS'. Incase if the message is sent without a SMS service provider, senderID should be set to the 10-digit mobile number of the sender.


##### timeout :

This is time (in seconds) until which the plugin listens for the SMS. For example, if the timeout is set to 60, then the plugin waits for 60 seconds to receive the SMS and extract the OTP. If the SMS is not received in 60 seconds, then the plugin returns a 'Resend OTP' message.

## geolocationOptions

Optional parameters to customize the retrieval of the geolocation
`Position`.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

### Options

- __enableHighAccuracy__: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a `Position` using network-based methods. Setting this property to `true` tells the framework to use more accurate methods, such as satellite positioning. _(Boolean)_

- __timeout__: The maximum length of time (milliseconds) that is allowed to pass from the call to `navigator.geolocation.getCurrentPosition` or `geolocation.watchPosition` until the corresponding `geolocationSuccess` callback executes. If the `geolocationSuccess` callback is not invoked within this time, the `geolocationError` callback is passed a `PositionError.TIMEOUT` error code. (Note that when used in conjunction with `geolocation.watchPosition`, the `geolocationError` callback could be called on an interval every `timeout` milliseconds!) _(Number)_

- __maximumAge__: Accept a cached position whose age is no greater than the specified time in milliseconds. _(Number)_




    
    
