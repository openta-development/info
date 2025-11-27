.. include:: /global.rst


Authoring questions
===================

Examples
__________________

See some examples on this website |examples_website|.



Content in OpenTA consists of exercises with one or many questions. An
exercise and its questions are created using a custom `XML
<https://en.wikipedia.org/wiki/XML>`_ format. For example,

:download:`example.xml <example.xml>`

.. literalinclude:: example.xml
  :language: xml


Mathematics typesetting
__________________________

OpenTA supports typesetting mathematical expressions in text through
`KaTeX <https://khan.github.io/KaTeX/>`_. This means that whenever you
want to show some mathematics, for example
:math:`\frac{1+x^2}{\sqrt{1-x}}`, you write the corresponding `LaTeX
<https://en.wikipedia.org/wiki/LaTeX>`_ syntax within dollar signs:
:code:`$\frac{1+x^2}{\sqrt{1-x}}$`.

See `the LaTeX wiki <https://en.wikibooks.org/wiki/LaTeX/Mathematics>`_ for a syntax reference.

For some more hands-on examples see `this stackexchange collection
<https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference>`_
(this is aimed at MathJax which also uses the same syntax).

`Here is the full xml schema <../_static/exercise-xsd.html>`_ !

Creating Exercises
==================

Here are instructions for creating exercises


.. toctree::
    :maxdepth: 1

    exercise_xml
    questiontypes/index
    tags/index


OPENTA XML Generation Rules
=============================

This section describes the rules for generating OPENTA-compatible XML exercises. You can copy the entire section  and use it as an instruction in ChatGPT. Or you can get the textfile here which you can paste in as an instruction in chatgpt query. It is very incomplete but it might help.

`chatgpt instruction: <../_static/chatgpt_instructions.txt>`_ 

General XML Structure
---------------------

When generating an exercise, the XML must follow the structure below:

.. code-block:: xml

    <exercise>
        <exercisename>EXERCISE_NAME</exercisename>
        <global>var1 = value1; var2 = value2; ...</global>
        <text>TEXT EXPLAINING THE EXERCISE</text>

        <question key="RANDOMKEY1">
            <text>TEXT EXPLAINING THE QUESTION</text>
            <expression>A MATHEMATICAL EXPRESSION THAT IS THE CORRECT ANSWER TO THE QUESTION</expression>
        </question>
    </exercise>

The values ``value1``, ``value2`` etc. may include units when relevant.
Units must be written out in full, for example: ``meter``, ``second``, ``kg``.

Example::

    g = 9.800 meter / second^2

Since units are already included in the global variable definitions, student answers must not contain units.
Expressions inside ``<expression>`` must refer only to variables.

Numerical Rules
---------------

- Use at least four significant figures when assigning numerical values.
- Avoid whole numbers and simple fractions.
- Angles must always be expressed in radians.
- The word ``radian`` must never be used in an expression.
- Avoid special angles unless specifically requested.

Mathematical Notation in Text
-----------------------------

Mathematical expressions inside ``<text>`` tags must be wrapped in dollar signs to ensure MathJax rendering.

Example:

.. code-block:: xml

    <text>The vector has length $ \sqrt{x^2 + y^2} $.</text>

Consistency of Variables
------------------------

All variables appearing inside:

.. code-block:: xml

    <expression> ... </expression>

must:

1. Be defined inside the ``<global>`` tag.
2. Have reasonable numerical values.
3. Include units when appropriate.

Hints and Regular Expressions
-----------------------------

Hints may be added to enforce restrictions or requirements on student answers.

A hint block has the form:

.. code-block:: xml

    <hint>
        <regex present="ATTRIBUTE">REGEX</regex>
        <comment>COMMENT</comment>
    </hint>

The ``ATTRIBUTE`` can be one of:

- ``required``
- ``forbidden``
- ``necessary``
- ``allowed``
- ``encouraged``
- ``discouraged``

Hints may be placed inside the ``<global>`` tag or inside an individual ``<question>`` tag.

Use cases include:

- ``forbidden`` – prohibit certain answer forms
- ``required`` – demand that a specific structure appears
- ``necessary`` – enforce a mandatory component
- ``allowed`` – whitelist forms
- ``encouraged`` / ``discouraged`` – guide style without strict enforcement

When including a regex, the system should remind the user that the above attributes are available.

Multiple Questions
------------------

If an exercise requires solving for multiple different variables:

- Create one ``<question>`` element per variable.
- Each question must have a unique ``key`` attribute.
- Each question must include its own ``<text>`` and ``<expression>``.

The ``<expression>`` tag contains only the target expression and must not contain an equal sign.

The ``<text>`` tag inside the question explains which variable the student is expected to compute.



XML SCHEMA
============
`Here is the full xml schema <../_static/exercise-xsd.html>`_

.. only:: latex

   .. raw:: latex

      \clearpage
      \includepdf[pages=-]{exercise-xsd.pdf}

You can validate all the exercises in OpenTA by pressing "Validate Exercises" in the toolbar
