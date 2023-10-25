.. include:: /global.rst

*********************
Managing Participants
*********************

Manage users
================

* Try out anonymous logins

   * Open this page in a browser: |examples_website|.
   * anonymous logins should now allowed
   * A self registration should be possible after a successful
     anonymous login

* Make sure the toolbar is visible by clicking the |fa-chevron-circle-down| icon at the top left

* Click the Users icon (|fa-users|) in the toolbar to see who is registered and their status

  .. important::
     Please don't add or delete fields that are available until you know what you are doing.

Creating additional privileged users
====================================

Once an anonymous user has registered, the user is promoted to
ordinary student. A superuser can further escalate the privileges. To
promote a user to full superuser, do the following

* Click the Users icon (|fa-users|) in the toolbar to see who is
  registered and what their status is,
* Click on the ID of the user to be promoted,
* You are now at the ``Change User`` page,
* On this page do the following:

   * Enable the ``Staff Status`` and ``Superuser status`` checkboxes,
   * Remove the ``Student`` and ``AnonymousStudent`` groups from,
     *Chosen groups* (if they are present),
   * Add the ``Admin``, ``Author`` and ``View`` to the *Chosen groups*
   * Set ``LtiRoles`` to ``ContentDeveloper,Instructor`` i.e. a string
     with a comma in the middle

   .. note::
      No permissions are necessary; they come automatically
      with the group

* If you wish to give the user all privileges, enable the *Superuser
  status* checkbox.
* Press the ``Save`` button at the bottom of the page to finish.

Deleting Users
==============

* Click the Users icon (|fa-users|) in the toolbar
* Click on the checkboxes corresponding to the users you wish to delete
* In the ``Action`` pull down, select ``Delete selected user``
* Press the ``Go`` button,
* You are now presented with a confirmation page,
* Press the ``Yes, I'm sure`` button to confirm the deletion

When OpenTA is used in with LTI authentication, a student who is
deleted will be reauthorized upon LTI access. The student must be
removed from Canvas enrollment to disable all further access.

Alternate Method
----------------

Another way to disable an individual student is to select the student, then remove the student from all groups.


Disable all student access
==========================

To disable all student access, unpublish the course.
