***************
Getting Started
***************

.. include:: /global.rst

Known bugs
=============

.. note::

   * Pleae report bugs


Login for the first time
========================

* Login to to the server with your email and password which is
  probably your email.

* If this is your fist login, you will prompted to change your password.

Create the first exercise
=========================

* After login , several buttons are visible on the toolbar.

.. image:: toolbar.png
     :align: center
     :width: 600px

* The ``ShowAll`` button toggles the display of unpublished exercises.

* Press the ``ShowAll`` button and now the circle icon to the left is
  now filled in. Below the toolbar, you will now now see a |fa-plus|
  symbol along with ``Exercise name``.

.. image:: add_exercise.png
     :align: center
     :width: 100px

* Use your mouse to click on ``Exercise name``.

* Now you can enter title of the new exercise. E.g. ``Kinetic energy of an ideal gas``.

* Hit the ``Return`` key.

The new exercise will now be shown under the toolbar.

.. image:: new_exercise.png
     :align: center
     :width: 100px

* If you have zip file of exercises, this is the right time to import them. See
  
  :ref:`import exercises`


Edit the exercise
=================

* Click the exercise and select the |fa-chevron-circle-down| icon on the
  top left of the toolbar. This reveals a second toolbar:

.. image:: exercise_toolbar.png
     :align: center
     :width: 600px

* Click on the ``LiveEdit`` button.

You will now have a split screen with the formatted exercise on the
left and the XML representation on the right.

.. image:: exercise_live_edit.png
     :align: center
     :width: 600px

* Press the ``Assets`` button below the toolbar. The box expands to
  show the attachments for this exercise.

.. image:: exercise_assets.png
     :align: center
     :width: 600px

* Press the Camera icon (|fa-camera|) to upload a JPG or PNG file.
  *Use a small file, a few 100Kb at most*.

* In the XML representation, change the value contained in the
  ``<figure>`` tag to be the name of the file you uploaded.

* Press the ``Save`` button on the XML representation panel. You will
  now see a thumbnail of the image along with the exersize.

* In the the XML, you can rename the exercise by changing the contents of the ``<exercisnename>`` tag.

If you are impatient to improvise on the file by editing the XML, note the following basic points.

* Delete any sections you want; make sure XML remains legal
* You can try some standard HTML syntax. Remember though:

        * all tags must be closed.
        * not all HTML is implemented.
        * all text and HTML belongs inside the ``<text>`` tags

* The ``<expression>`` tag contains the question's correct answer

* All variables in ``<expression>`` must receive numerical assignments
  in the ``<global>`` tag

* All question keys must be unique in the exercise

* All choices keys must be unique in the multiple choice question.

* ``Vi``  mode is enabled if you choose ``Switch keymap default``.

* The ``<right>`` tag is used to right justify a figure on the page.
  Delete the entire line if you are not going to use a figure.

* Mathematical expressions are interpreted through `KaTeX
  <https://khan.github.io/KaTeX/>`_, which is a subset of `LaTeX
  <https://www.latex-project.org/>`_.


Save the exercise
=================

* Press ``Save`` when there are no errors

.. note::

   * You will not be able to save if there are errors in the XML

.. warning::

   * In case you make a mess of the XML and can't recover:

      * Press the |fa-undo| button (reset), it is the blue button next
        to the ``Save`` button in the editing box
      * Start over completely and reload the question
      * If the XML is really messed up , try ``XML & assets`` instead
        of ``Live Edit``


Publish the exercise
====================

* Press ``Options`` in the toolbar, which is next to ``LiveEdit`` in the blue toolbar.

* Click on the ``Published`` checkbox to enable it

* Press the ``Save`` button to publish the exercise


Publish the course
==================

Ensure you are displaying the toolbar shows. If it's not visible press
the |fa-chevron-circle-down| icon in the top left corner.

* Press the ``Course`` button from the toolbar

* A new toolbar is now shown, from it press ``Options``

* Change the following settings:

        * In the **Email reply to** card, replace the email with yours

        * In the **Owners** card, select yourself and ``super``

        * In the **Course name** card, change the name of the course
          if you wish. It defaults to your CID.

        * In the **Allow anonymous student** card, check off ``Allow
          anonymous student`` if you want to permit anonymous logins.
          *(If you want, you can disable this at a later time and remove
          anonymously registered students).*

* Press the ``Save`` button when you've make all the changes to the course.

* You can now see what the course looks like for students by checking ``Student view``


More examples
=============

To see some example questions and how they are formatted, you can log
into `https://examples.opentaproject.com
<https://examples.opentaproject.com/lti/index>`_. This site allows
anonymous login.

If you wish to save your work, a self registration should be possible
after a successful anonymous login.

Make sure the toolbar is visible by clicking |fa-chevron-circle-down| icon at the top left.

See who has used your site
==========================

Click the Users icon (|fa-users|) in the toolbar to see all the users in the course.

.. note::

   Please don't add or delete users until you know what you are doing.



Panic: Exercises are messed up
==============================

.. warning::

   To recover from a broken state:

      * From the toolbar, press ``Exercises -> Reload Exercises`` and then the ``Perform reload`` button.
