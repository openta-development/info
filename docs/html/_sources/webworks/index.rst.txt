OpenTA For webworks users
=============================================

.. _author-example: https://examples.opentaproject.com
.. _migrating-procedure: https://webworks.opentaproject.org/webwork2




Create a blank course
====
Write an email to stellan.ostlund@gmail.com and ask for credentials to administer a  course. Include the follwing information

        * Course Title
        * Institution
        * Your name and email

You will get a temporary password to set up the course.

Canvas setup
=====

To set up the course in canvas, go to Settings ->  Apps -> View App Configurations -> +App

Then  with your_course_id as the id of your course 

        * Configuration- Type => By URL
        * Name => your_course_id
        * Consumer key => ab*****ra [ get from admin ]
        * Shared Secret => co*****et [get from admin ]
        * Config URL https://webworks.opentaproject.org/cgi-bin/config.pl?course_id=your_course_id


Migrate your course to the WebWork instance at openta
======

Migrating a course from Webworks to OpenTA is in development.   Until this procedure is thoroughly tested, it is best to clone your course into an ordinary
WeBWork 2.17 installation https://webworks.opentaproject.org/webwork2 . Make sure exercises are complete and working. We can then migrate the course to the OpenTA framwork for you.

There are a number of sites discussing how to copy a course to a new server. See https://vcc.teamdynamix.com/TDClient/50/Portal/KB/ArticleDet?ID=2838 or
https://kb.swarthmore.edu/display/MOODLE/Copying+a+WeBWorK+Course


