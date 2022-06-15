***************
Finishing, archiving and migrating  a course
***************

.. include:: /global.rst

When finishing a course, make sure you archive the course results and exercises so you can access the results on your own computer without an OpenTA instance. If you plan to use the course again, make you separately archive the exercises so you can start your new course with the material you prepared previously.  So upon finishing your course, perform steps 1) and 2).  

.. important::
       zip files are fragile. In order to be sure to be able to to use a downloaded zip files to an OpenTA server make sure you have the original file. Do not count on rezipping a file tree on your own computer. Make a safe copy of the downloaded zip, and unzip a copy to inspect the filetree.


1) Archiving your  complete course
========================

* Press Home (|fa-home|) on the toolbar and if necessary (|fa-arrow-circle-up|) to bring up the menu bar:
 
.. image:: fig1.png
     :align: center
     :width: 600px

* Then press ``Server``

.. image:: fig2.png
     :align: center
     :width: 600px

* Press ``Export``. This downloads a comple archive of the course; database, exercises and student submissions. The size depends completely on the course and can be 2Gb if a large number of students have submitted work. 

* Store the file safely. The archive can be used to install the course on another OpenTA instance. 

* Make a scratch copy of the downloaded file and unzip it. 
 
* The unzipped files contains archive of the results, exercises and student submissions. By running the command ``python3 -m http.server`` at the root of the downloaded directory, the contents can be browsed on ``http://localhost:8000``. For archival purpose, you should have enough info available so you could delete the course from the server. It is recommended you browse the archive before abandoning or deleting the course from the OpenTA server.

2) Archiving your  exercises
=======================

* Press Home (|fa-home|) on the toolbar and if necessary (|fa-arrow-circle-up|) to bring up the menu bar:



.. image:: fig3.png
     :align: center
     :width: 600px

* Press ``Course ``

.. image:: fig4.png
     :align: center
     :width: 600px

* Now press  ``Export exercises`` and download the zip file. Save the zip file, and unzip a copy. As above, by running the command  ``python3 -m http.server`` at the root of the downloaded directory, the contents can be browsed on ``https://localhost:8000``. The directory contains the exercises together with information about meta data such as published or not. The zip file can reimported to a scratch course to create a new instance, such aswould be created when the same course is taught again. 






3) Moving a mature course to new OpenTA server
========================

Should you need or want to migrate your entire course to another OpenTA server, 
follow these instructions.


* Let us assume you want to import a mature course to a brand new server. Create a new ''scratch'' course on the new server. Then  access the the home toolbar



.. image:: fig1.png
     :align: center
     :width: 600px
* Press ``Server`` 
     
.. image:: fig2.png
     :align: center
     :width: 600px

* Press ``Import``.  Uploading an OpenTA server zip file will completely replace your scratch course instance with the contents of the zip archive.  You will not be able to recreate the scratch course. 

.. _import exercises:

4) Starting a new course with the old exercises
========================

These instructions describes how you would start a new course with the exercises you saved in 1).

Go to the home of the new course page with one scratch exercise present.

.. image:: fig3.png
     :align: center
     :width: 600px
* Press ``Course``

.. image:: fig4.png
     :align: center
     :width: 600px


* Press ``Import Exercises``.  Choosing the zip file of exercises, they will be imported into to your new course  resulting in a clean course with the old exercises. 

.. important::
      The new files will be merged with the new. But,  if the same exercies already exist there will be duplicates and a big mess. Better to import to clean course.



* To update the duedates and other meta data, you can click on ``Modify``

  .. image:: fig4.png
     :align: center
     :width: 600px

and shift the dates by a fixed number of days, often 364 days if the course is going to follow the same schedule as the previous year.  Here you can also select what metadata to preserce in the modifications. 


