.. include:: /global.rst

File structure
==============

Exercises are stored on the server's file system. An exercise consists
of a directory containing a definition file ``exercise.xml`` together
with a file ``exercisekey`` and possibly additional assets such as
``figures/pdf``. This directory must be located somewhere under the root
``exercises/`` directory to be recognized by the system.

.. topic:: Directory structure

   | exercises
   | ├── ...
   | ├── exercise_folder
   | │   ├── exercise.xml
   | │   ├── exercisekey
   | │   └── ...
   | ├── ...
   |

`exercise.xml`
--------------

An XML file containing all information about the exercise, see below
for the XML format.

`exercisekey`
-------------

A text file containing a unique key (up to 255 bytes of UTF8 encoded
ASCII) that identifies the exercise in the database. A key file can be
added and assigned manually, but is automatically generated as a
`uuid4 <https://docs.python.org/3.5/library/uuid.html>`_ identifier if
not present.

Exercise XML format
===================

This first part describes the XML tags that are common to all exercises.

Example
-------

.. only:: html

  :download:`example.xml <example.xml>`

.. literalinclude:: example.xml
  :language: xml

Specifications
--------------

..
   Rendering with tabular:
   https://rest-sphinx-memo.readthedocs.io/en/latest/ReST.html#rendering-with-tabular

.. only:: latex

   .. tabularcolumns:: |p{0.15\linewidth}|p{0.40\linewidth}|p{0.35\linewidth}|

.. rst-class:: tight-table

.. list-table:: Top level tags
   :header-rows: 1

  * - Tag
    - Attributes
    - Description
  * - ``<exercise>``
    -
    - Root tag
  * - ``<exercisename>``
    -
    - The visible name/title of the exercise
  * - ``<question>``
    - ``key`` [string]
         unique id (within the exercise)
      ``type`` [string]
         :ref:`question type <question-types>` [compareNumeric, ...]
    - Question root tag. See :ref:`question-types`.
  * - ``<global>``
    - ``type`` [string]
         question type (optional, if not specified all questions
         will recieve this data).
    - Data that will be passed to all questions in this exercise. For
      example variables for multiple symbolic questions.
  * - ``<figure>``
    - ``size`` [string]
         optional size specification. Choices are small*, *medium* or
         *large*.
    - A figure (usually an image) that aids in explaining the
      question. Specify the filename of image that was added to the
      exercise folder, or uploaded via the assets browser in ``XML &
      Assets`` when editing the exercise.
