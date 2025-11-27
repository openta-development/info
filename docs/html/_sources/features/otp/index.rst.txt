.. include:: /global.rst

************
OTP
************

Overview
========
OTP can be used to authenticate after a password.  
The first time a user logs on with password, QR code is generated
which must be saved into an oauth app

Activate OTP on the server
_________________________

    - set USE_OTP=True in the environment
    - OTP_BYPASS_MAX_AGE
      - environmental variable OTP_BYPASS_MAX_AGE=3600
            - this bypasses the OTP requirement for 3600 seconds for that user.
    - After a user has used OTP to log in, OTP will no longer be required from that IP
    - OTP can only be reset by forgotten password reset. Should work by email reset or course examiner resets password


