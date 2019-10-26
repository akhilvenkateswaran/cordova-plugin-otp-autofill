var exec = require('cordova/exec');

module.exports = {
    startOTPListener: function(successCallback,errorCallback,options) {
        cordova.exec(successCallback,errorCallback,"SmsOtpAutofill","extractOtp",[options]);
    }
}
