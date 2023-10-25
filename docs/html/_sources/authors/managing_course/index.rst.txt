.. include:: /global.rst

*******************
Managing the Course
*******************

More Course Options
===================

Make sure the toolbar is visible by clicking |fa-chevron-circle-down| icon at the top left.

* Press the ``Course`` button

* In the new toolbar, press ``Options``

This page shows the settings for a course. Each setting is grouped by and presented in it's own card. These are:

Published
   Enable this checkbox if you wish to publish the course (i.e. allow students to log in and answer questions).

Course name
   A short name suitable for links without spaces or special charcters.

Course long name
   A descriptive name to be used in and appear in Web pages.

Url
   The full url of the course.

Motd
   A short message for web pages; typically blank.

Difficulties
   Choices of badges to decorate exercises:

   * ``+:Recommended,*:Easy ..`` for instance makes a badge '+'
     correspond to the label recommended etc.

   * This can be anything you want; choices appear later in exercise
     options

Deadline time
   Time of day when exercises are due.

Use lti
   unchecked

   .. note::
      The *Use lti* setting is meant for advanced users. Novice users should leave it unchecked.

Registration by password
   Allow password for registration.

Registration domains
   Domains from which to allow registration. Wildcard '*' OK.

   .. note::
      This is currently only a checkbox.


Use email
   Enable email.

   * Put in your own email in ``email reply to``

   * Ignore the following settings for **opentaproject.com** sites

      * ``Email host user`` - The SMTP server's host name
      * ``Email username`` - The SMTP username
      * ``Email host password`` - The user's email password; stored unencrypted

Use autotranslation
   Novice users should leave this unchecked.

Languages
   The Default is ``en``; language codes separated by comma, for instance
   ``sv,en,de``. Not particularly useful without auto translation.

Owners
   Check your username and ``super`` as owners. In addition, select any other users who
   should be able to view *unpublished* questions.

Allow anonymous student
   Enable this setting` to allow anonymous logins.

   .. note::
      Enable this setting only if you do not plan to use LTI (i.e. Canvas) or Moodle


Press the ``Save`` button after you have changed the setting you are interesed in chaning.

To see what the course looks like for a student, press ``Student view`` button.

Enable LTI i.e. Canvas or Moodle
================================

*This section is relevant only to those who will be using OpenTA from
an LTI CMS such as Canvas or Moodle.*

More information about LTI can be found here: `Learning Tools
Interoperability(LTI)
<https://en.wikipedia.org/wiki/Learning_Tools_Interoperability>`_.

.. note::

   `Important`: do not allow students to first authenticate outside of
   Canvas if that's how they will be expected to login later. A
   student's identity must be first verified by LTI. You cannot
   migrate a student into Canvas if the identity is not first
   established that way.

This assumes that you are able to install an LTI app in Canvas or
Moodle.

* In the ``Canvas`` interface, choose
* Choose ``Settings -> Apps``
* Choose ``View App Configurations -> +App -> Configuration Type ->``
* Choose ``Configuration Type -> ByURL``


* In another tab or window, in OpenTA choose ``Course Options``
* Check ``Use LTI`` and ``Save`` and go back to ``Options``
* Copy the (OpenTA) entire config URL , including the ``https://``
  into (LTI) ``Config URL``
* Copy the entire (OpenTA) ``Lti key`` into the LTI ``Consumer Key``
* Copy the entire (OpenTA) ``Lti secret`` into the LTI ``Shared Secret``
* Choose (Canvas) ``Submit``
* If all went well, the App has been added to Canvas.
* To allow students to easily break OpenTA out from the Canvas frame:
* Add the Canvas app `Redirect Tool` and point it to the hostname
  running OpenTA

* `Instructions only for those whose superuser identity coincides with
  your Canvas identity`

   * Create a new superuser identity for yourself so it will be
     different from the identity you have in Canvas.
   * Note that you can assign yourself a password in the admin
     interface (click the gear icon in the header)
   * **Make sure you can login as the new superuser**
   * Then delete the original user so that identity can be recreated
     with an LTI login


* Try to login through the LTI CMS.

   .. note::
      * Canvas opens OpenTA in a frame, not only taking valuable desktop
        space with sidebars and headers, but also causing security issues
        through third-party cookies. Some admin features may not work in
        the Canvas frames, so it is best to administer the course as
        superuser via direct login and not through Canvas.

      * `If you already have a user identity that coincides with that
        from Canvas, change username and email of the old superuser to
        allow a new identity to be created from Canvas. If you want the
        Canvas identity to be superuser, change the user in the admin
        interface. It can be useful to retain a student identity when
        used through Canvas.`

      * To guard against misconfigurations by LTI admins, an LTI
        authenticated user will never automatically have access other
        than Student in OpenTA even if they are examiner or
        CourseDeveloper. The superuser must provide suitable non-student
        access to LTI authenticated users manually.

* Suggestion on dealing with course assistants and other admins

   * The best way to proceed is that the course createor obtains a new
     superuser identity, including password and then, after it is
     verified working, deletes the original identity. Then course
     creator logs in **through Canvas**. The superuser login is then
     used to provide whatever privileges is desired to the new
     identity. Same procedure with course assistants; first the course
     assistant logs in through Canvas, then superuser promote
     privileges.

   * This could of course have been done automatically if OpenTA
     respected a Canvas identity such as Examiner or CourseDeveloper.
     However, we have chosen not to rely on that, since a
     misconfiguration of roles from University Canvas services could
     mistakenly compromise the OpenTA site.
