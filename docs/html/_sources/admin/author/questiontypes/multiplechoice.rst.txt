.. role:: xml(code)
   :language: xml

.. _multipleChoice:

multipleChoice
==============

.. code-block:: xml

  <question type="multipleChoice">
   ...
  </question>

Multiple choice questions contains different alternatives where one or more can
be correct. They are answered by marking the correct alternatives and then
submitting. The content of the alternatives can be text, math or elements such
as figures.

.. code-block:: xml

  <question type="multipleChoice">
    <text>Pick the correct alternatives below.</text>
    <choice key="0"><text> The first choice</text></choice>
    <choice key="1" correct="true"><text> The second choice</text></choice>
    <choice key="2"><text> The third choice</text></choice>
    <choice key="3" correct="true"><text> The fourth choice</text></choice>
  </question>

The following tags can be used inside a **multipleChoice** block.

.. only:: latex

   .. tabularcolumns:: |p{0.15\linewidth}|p{0.40\linewidth}|p{0.35\linewidth}|

.. rst-class:: tight-table

.. list-table::
  :header-rows: 1
  :widths: 20 10 70

  * - Tag
    - Attributes
    - Description
  * - ``<text>``
    -
    - Question text.
  * - ``<choice>``
    - ``key`` [string]
         - unique id (within question)
      ``correct`` ["true"]
         - marks this alternative as correct.
    - An alternative for the answer.
  * - ``<hint>``
    -
    - Shows a hint if the student answers incorrectly.
  * - ``<rate>``
    -
    - Specifies how many tries a student can make per duration of
      time. The time is specified as ``number/unit`` where unit is
      ``s`` (second) or ``h`` (hour). For example ``<rate>3/h</rate>``
      permits three tries per hour. See `rates
      <https://django-ratelimit.readthedocs.io/en/v1.0.0/rates.html>`_
      for the detailed syntax description.

Examples
--------

Basic (with math)
^^^^^^^^^^^^^^^^^^

.. code-block:: xml

 <question key='key1' type="multipleChoice">
    <text>How many people live of planet earth?</text>
    <choice key="0"><text> $ 9 \times 10^9 $ </text> </choice>
    <choice key="1" correct="true"><text> $ 9\times 10^{10} $ </text></choice>
    <choice key="2"><text> $ 9\times 10^{11} $ </text> </choice>
  </question>
