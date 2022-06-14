***************
Finishing
***************

.. include:: /global.rst


Archiving your  complete course
========================


* The home toolbar

.. image:: fig1.png
     :align: center
     :width: 600px
* Press ``Server``

.. image:: fig2.png
     :align: center
     :width: 600px

* Press ``Export``. This downloads a comple archive of the course; database, exercises and student submissions. The size depends completely on the course and can be 2Gb if a large number of students have submitted work. 

* Store the file safely. The archive can be used to install the course on another OpenTA instance. 

* Make a scratch copy of the downloaded file and unzip it. 
 
* The unzipped files contains archive of the results, exercises and student submissions. By running the command ``python3 -m http.server`` at the root of the downloaded directory, the contents can be browsed on ``https://localhost:8000``. For archival purpose, you should have enough info available so you could delete the course from the server. It is recommended you browse the archive before abandoning or deleting the course from the OpenTA server.

Archiving your  exercises
=======================


* The home toolbar


.. image:: fig3.png
     :align: center
     :width: 600px

* Press ``Course ``

.. image:: fig4.png
     :align: center
     :width: 600px

* Now press  ``Export exercises`` and download the zip file. Save the zip file, and unzip a copy. As above, by running the command  ``python3 -m http.server`` at the root of the downloaded directory, the contents can be browsed on ``https://localhost:8000``. The directory contains the exercises together with information about meta data such as published or not. The zip file can reimported to a scratch course to create a new instance, such aswould be created when the same course is taught again. 






Moving a mature course to new OpenTA server
========================

* Let us assume you want to import a mature course to a brand new server. Create a new ''scratch'' course on the new server. Then  access the the home toolbar

.. image:: fig1.png
     :align: center
     :width: 600px
* Press ``Server``

.. image:: fig2.png
     :align: center
     :width: 600px

* Press ``Import``.  This will completely replace your scratch course instance with the contents of the zip archive. 

Starting a new course with the old exercises
========================

Go to the home of the new course page with presumably no exercises present. 

.. image:: fig3.png
     :align: center
     :width: 600px
* Press ``Course``

.. image:: fig4.png
     :align: center
     :width: 600px

* Press ``Import Exercises``.  Choosing the zip file of exercises, they will be imported into to your new course  resulting in a clean course with the old exercises. 

* To update the dates , you can click on ``Modify``

  .. image:: fig4.png
     :align: center
     :width: 600px

and shift the dates by a fixed number of days, often 364 days if the course is going to follow the same schedule as the previous year.  Here you can also select what metadata to preserce in the modifications. 


