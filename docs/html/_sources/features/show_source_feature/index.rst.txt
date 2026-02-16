Show Source Feature
===================

Overview
--------

The ``show_source`` attribute allows the raw XML source of an exercise
(or part of it) to be displayed instead of the rendered exercise.

This feature is primarily intended for:

-  Users learning how to create exercises in OpenTA
-  Course participants in "how to use OpenTA" courses
-  Authors who want to inspect XML structure directly

When activated,  the raw XML is displayed in addition to the rendered content.

Activation Requirements
~~~~~~~~~~~~~~~~~~~~~~~

The ``show_source`` attribute works only if:

1. It is present in the XML, **and**
2. The corresponding course setting that enables "Show Source" is
   activated.

If the course setting is disabled, the attribute is silently ignored.

This allows the attribute to remain in exercise files without affecting
production courses.

User Guide
----------

Where It Can Be Placed
~~~~~~~~~~~~~~~~~~~~~~

The ``show_source`` attribute may be placed on any first-level block:

-  ``<exercise>``
-  ``<global>``
-  ``<question>``

Scope Rules
~~~~~~~~~~~

The scope depends entirely on placement.

1. On ``<exercise>``

   .. code-block:: xml

   …

   Effect:

   -  Displays the raw XML of the entire exercise
   -  All inner ``show_source`` attributes are ignored
   -  No rendering occurs anywhere in the exercise

2. On ``<global>``

   .. code-block:: xml

   …

   Effect:

   -  Displays only the raw XML of the ``<global>`` block
   -  Other parts of the exercise render normally
   -  Overridden if ``<exercise>`` has ``show_source``

3. On ``<question>``

   .. code-block:: xml

   …

   Effect:

   -  Displays only the raw XML of that specific question
   -  Other questions render normally
   -  Overridden if ``<exercise>`` has ``show_source``

Precedence Rules
~~~~~~~~~~~~~~~~

If ``show_source`` appears in multiple places:

1. The outermost placement takes priority.
2. Inner placements are ignored.

Hierarchy:

::

exercise > global > question

What Is Displayed
~~~~~~~~~~~~~~~~~

When activated, the following is shown:

-  Raw XML exactly as written
-  No LaTeX processing
-  No MathJax rendering
-  No HTML interpretation

This allows users to study:

-  Structure
-  Attributes
-  Expressions
-  Hints
-  Validation patterns

Best Practices
~~~~~~~~~~~~~~

-  Enable this feature only in instructional or development courses.
-  Avoid using it in production assessment courses.
-  Use exercise-level placement when documenting complete structure.
-  Use question-level placement when demonstrating specific constructs.

Developer Reference
-------------------

Attribute Behavior
~~~~~~~~~~~~~~~~~~

-  Attribute name: ``show_source``
-  Expected value: ``"true"``
-  Default behavior: If absent, no source is shown.

If the attribute appears at multiple levels, only the outermost
first-level block is activated.

Rendering Logic
~~~~~~~~~~~~~~~

When ``show_source`` is active for a given scope:

-  Rendering of that scope is suppressed.
-  The raw XML string for that scope is returned.
-  Inner ``show_source`` attributes are ignored if overridden by an
   outer scope.

Security Considerations
~~~~~~~~~~~~~~~~~~~~~~~

-  The attribute is gated by a course-level configuration setting.
-  If the course setting is disabled, the attribute is ignored.
-  This prevents accidental exposure in production environments.

Intended Use Cases
~~~~~~~~~~~~~~~~~~

-  Teaching XML structure in OpenTA
-  Debugging exercise structure
-  Documentation and review
-  Demonstration courses

Example: Full Exercise
~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

a = 5 a + 3

In this case, the full raw XML is displayed instead of rendered output.
