***************
Finishing, archiving and migrating  a course
*********************************************

.. include:: /global.rst

.. important:: After finishing a course, make sure you archive the course results and exercises as described so you can forever locally access your student results and exercises without access to the OpenTA server.  zip files can are fragile and  and rezipped files might not be compatible. Make sure you have the original zip file available if you unzip. Just to be sure your unzip does not remove the zip file, make a copy of the zip file and unzip that to inspect the contents.


1) Archive your finished course
========================
Create a complete zip file to archive all exercises and student results to archive your old data and course results. This file is confidential since it includes student results.

* Press Home (|fa-home|) on the toolbar and if necessary (|fa-arrow-circle-up|) to bring up the menu bar:
 
.. image:: fig1.png
     :align: center
     :width: 600px

* Then press ``Server``

.. image:: fig2.png
     :align: center
     :width: 600px

* Press ``Export`` to generate and download the zip.  The size depends completely on the course and can be 2Gb if a large number of students have submitted work. 

* Store the file safely. The archive can be used to install the course on another OpenTA instance. 

* Make a scratch copy of the downloaded file and unzip the copy.
 
The archive contains the results, exercises and student submissions. 

Run the command ``python3 -m http.server`` at the root of unzipped directory. The contents can then be browsed on ``http://localhost:8000``. Browse the archive before to make sure you have what you need.

2) Archive your finished exercises 
============================
Create zip file of only your exercises intended to be shared or exported to a brand new course. No student data is included; exercises only and could be shared with others who want to use your exercises.


* Press Home (|fa-home|) on the toolbar and if necessary (|fa-arrow-circle-up|) to bring up the menu bar:



.. image:: fig3.png
     :align: center
     :width: 600px

* Press ``Course``

.. image:: fig4.png
     :align: center
     :width: 600px

* Now press  ``Export exercises`` and download and save the zip file and make a copy that you can unzip.
  
 
Unzip the zip copy. By running the command  ``python3 -m http.server`` at the root of the downloaded exercises directory, the contents can be browsed on ``https://localhost:8000``. The directory contains the exercises together with information about meta data such as published or not. The zip file can reimported to a scratch course to create a new instance, such as would be created when the same course is taught again. No user or student information is included.

3) Duplicate  when you teach the course again.
================================================================

.. |tools| image:: fig7.png
     :width: 40px

The easiest path to starting up the new course based on the old is duplicating the course on the same OpenTA server. You don't need the zip files, but you should download and save them anyway to ensure all future  access to your exercises and data.

* Press Home (|fa-home|) on the toolbar and if necessary (|fa-arrow-circle-up|) to bring up the menu bar:

* Press ``Course``

.. image:: fig4.png
     :align: center
     :width: 600px

* Press ``Duplicate`` A new course name is suggested; change it to what you want , then press ``Create the new course.``
* When the server indicates its done, logout of the old course.

* log in to the new course with your present login and password. Admins will be migrated wwhereas no students are imported. Dates and exercise options are left unchanged. 
  
  * Use ``Course -> Modify`` to shift the dates typically by 52x7 = 364 days. Or wipe due dates clean by deselecting deadline_date. 
  * Uncheck the course options you don't want to keep. 
  * Click  ``Click here to modify ...``
  * Look over your course  using the the cog and users icons in the toolbar |tools|


 
3b) Setting up your new course with Canvas
==========

.. important::

        Login to OpenTA using your Admin credentials, same as your old course.


* Press ``Course`` and then ``Options``

.. image:: fig4.png
     :align: center
     :width: 600px

* If ``Use lti`` is unchecked, check it and ``Save`` and reload ``Options``.
* Copy the following three fields ; you need to paste them into canvas

  * ``Url`` i.e. ''Config url'' field starting with 'https' and ending with '/config_xml'
  * ``Lti key``
  * ``Lti secret``


.. warning::

        You must have Canvas "Course Designer" privileges to add OpenTA to Canvas;  being only Examiner is not enough. Provide the role of Course Designer to yourself and/or somebody else. This is done in Canvas by checking ``People``  in the left Canvas navigation column, then checking ``+People`` in the top right Canvas Navigation bar. Then  choose ``Course Designer`` , add your email and click ``Next``  then ``AddUsers``.  Check for the  email. Log back in and accept the invitation.

.. important:: 

        Now go to your course Canvas page and login using the account that is Course  Designer:

* Press ``Settings``, found furthest down in the left vertical navigation column
* Press ``Apps`` , found in the navigation bar at the top of the center frame.
* Press ``View App Configurations`` found in the title bar
* Press ``+App`` in the refreshed title  bar.   
        * *If this does not appear you may not have the role CourseDesigner* See instructions in green above.
* Select ``By URL`` as configuration type
* Put in a name such as ``Open TA`` in 'Name'
* Put in the ``Lti key`` you copied above into 'Consuer key'
* Put ``Lti secret`` you copied above into 'Shared Secret'
* Put in ``Url`` you copied above into 'Config URL'
* Press ``Submit``. Hopefully success is confirmed by Canvas. If not, suspect incompletely copied key or secret and try again
* Go back to the Canvas page and refresh. If 'Open TA' appears in the left navigation column you succeeded.
* Press ``OpenTA`` in the left navigation column. If everythning is set up correctly, you will open up the course page. Close the OpenTA  window within Canvas and make sure it returns.


.. |returnimage| image:: fig5.png
     :width: 40px
     

* If OpenTA is now opening in a Canvas frame, make sure students can open up a frameless window.

  * Go back in canvas and press ``Apps``
  * Press the icon  |returnimage|  to configure the `Redirect Tool`
  * Press ``Add App``
  * Give it name ``OpenTA-frameless``
  * Give it the redirect consisting of ``Url`` up to but not including the '/lti_config_xml/'
  * Check all the boxes so it will appear in relevant menus
  * Check 'Add App' and refresh the Canvas page

* In order to let student log in, you must move the newly added apps to make them visible.

  * In Canvas, press ``Settings`` in the left navigation column
  * Press ``Navigation`` in the center navigation bar
  * Drag 'OpenTA' and 'Redirect Tool' to either hidden or view configuration. 
  * Press ``Save``

* When you make the Canvas OpenTA link visible to students, keep in mind that since the course is cloned,  students will immediately get
  access to published exercises. If you want more restricte access you have several options. 

  * Log in directly as Admin to OpenTA *Do not go through Canvas; your canvas identity is not admin*
  * You can either unpublish the course in the ``OpenTA -> Course -> Options`` or unpublish all exercises in ``OpenTA -> Course -> Modify``

* Ask your course assistants to log in through Canvas
* After course assistants are logged on, escalate them and yourself to Admin by pressing the Student icon in OpenTA
* Admins should not be escalated to superuser unless necessary

 




4) Other ways of migrating a course
=========================================================



4a) Starting a completely based on zipped exerises.
------------------------------------------------------------------

These instructions describe how you would start a new course with exercises that was saved in 2), either by yourself or from a colleague.

Create an  example exercise in the new course.

.. image:: fig3.png
     :align: center
     :width: 600px

* Press ``Course``

.. image:: fig4.png
     :align: center
     :width: 600px


* Press ``Import Exercises``.  Upload the zip file of exercises you created in 2). Exercises will be merged into to your new course  resulting in a clean course with the old exercises, so you could merge exercises from two courses.

.. important::
      Warning exercises are merged,  and if the same exercies already exist there may be duplicates and you will get a big mess and cannot easily figure out which is the old version and which is the new. Rename your old exercises with new exerissenames or use alternate directories if you think you risk duplication.  Safest of course is to start with an empty course.


* To update the duedates or other meta data, you can click on ``Modify`` and follow the instructions.

  .. image:: fig4.png
     :align: center
     :width: 600px

For instance shifting the dates 364 days  will often update the duedates by one year, respecting weeks.  You can also select what metadata to preserve in the modifications. 


4b) Moving a mature course to new OpenTA server
------------------------------------------------

Should you need or want to migrate your entire running course to another OpenTA server or development server, follow these instructions.


* Create a new empty course on the new server. Then  access the the home toolbar in the new course



.. image:: fig1.png
     :align: center
     :width: 600px

* Press ``Server`` 

.. image:: fig2.png
     :align: center
     :width: 600px

* Press ``Import``.  Upload  OpenTA server zip file you created in 1).  This will completely replace the newly created course  with contents of the zip archive.  You will not be able to recreate the course you just overwrote.

.. _import exercises:

