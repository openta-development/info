Instructions for Constructing OpenTA XML Exercises
==================================================

General Structure
-----------------

When asked to construct an exercise, generate an XML file with the
following structure:

.. code:: xml

   <exercise>
     <exercisename> EXERCISE_NAME </exercisename>

     <global>
       var1 = value1;
       var2 = value2;
       ...
     </global>

     <text>
       TEXT EXPLAINING THE EXERCISE
     </text>

     <question key="RANDOMKEY1">
       <text>
         TEXT EXPLAINING THE QUESTION
       </text>

       <expression>
         A MATHEMATICAL EXPRESSION THAT IS THE CORRECT ANSWER TO THE QUESTION
       </expression>
     </question>
   </exercise>

--------------

Variable and Unit Rules
=======================

-  Variables are defined inside the ``<global>`` tag.
-  Each variable must have a **numerical value**.
-  Units may be included if relevant.

Example:

::

   g = 9.8066 meter / second^2
   m = 2.347 kg

Use explicit unit words such as:

-  meter
-  second
-  kg

Important rule about units in answers
-------------------------------------

Since variables already include units in the ``<global>`` definition:

-  **Do NOT ask the student to include units in their answer.**
-  Student answers should use the defined variables only.

--------------

Numerical Value Requirements
============================

When defining numerical values:

-  Use **at least four significant figures**
-  Avoid:

   -  whole numbers
   -  simple fractions
   -  overly convenient values

Example:

::

   v0 = 3.274 meter / second

--------------

Angle Rules
===========

Angles must follow these rules:

-  Angles are **always defined using radians**
-  **Do NOT use degrees**
-  **Do NOT write the word “radian” in expressions**

Reason:

Radians are treated as equal to 1 in expressions.

Therefore:

-  Never include the word **radian** in ``<expression>``.

Also:

-  Avoid special angles (π/6, π/4, π/3, etc.)
-  Use general values unless the problem explicitly requires special
   cases.

--------------

Math Formatting in Text
=======================

Inside ``<text> ... </text>`` tags:

-  Wrap mathematical expressions with **dollar signs** so they are
   MathJax compatible.

Example:

::

   The velocity is given by $v = v_0 + at$.

--------------

Consistency Rule
================

All variables appearing inside:

::

   <expression> ... </expression>

must:

1. Be defined in ``<global>``
2. Have sensible numerical values
3. Include units if appropriate

--------------

Enforcing Answer Rules with Hints and Regex
===========================================

The system can enforce answer formatting using **regex hints**.

Hints can be placed either:

-  inside ``<global>``
-  inside ``<question>``

--------------

Forbidden Answer Forms
======================

If a mathematically correct answer format must be rejected, use:

.. code:: xml

   <hint>
     <regex present="forbidden"> REGEX </regex>
     <comment> COMMENT HERE </comment>
   </hint>

The comment should explain why the answer was rejected.

--------------

Required Answer Forms
=====================

If the student’s answer must contain a certain structure, use:

.. code:: xml

   <hint>
     <regex present="required"> REGEX </regex>
     <comment> COMMENT HERE </comment>
   </hint>

--------------

General Hint Structure
======================

.. code:: xml

   <hint>
     <regex present="ATTRIBUTE"> REGEX </regex>
     <comment> COMMENT </comment>
   </hint>

Where ATTRIBUTE can be one of:

-  required
-  forbidden
-  necessary
-  allowed
-  encouraged
-  discouraged

The appropriate attribute should be inferred from the query.

--------------

Reminder About Regex Attributes
===============================

If a regex rule is used, after constructing the XML the system should
remind the user that the available regex attributes are:

::

   forbidden
   necessary
   allowed
   encouraged
   discouraged
   required
