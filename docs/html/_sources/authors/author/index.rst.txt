*********
Authoring
*********

.. include:: /global.rst

TL;DR
=====

See some examples on this website |examples_website|.


Introduction
============

Content in OpenTA consists of exercises with one or many questions. An
exercise and its questions are created using a custom `XML
<https://en.wikipedia.org/wiki/XML>`_ format. For example,

:download:`example.xml <example.xml>`

.. literalinclude:: example.xml
  :language: xml

In this example the question type is :ref:`compareNumeric`. It is used
to compare the student answer with the correct answer by random
sampling.

Mathematics typesetting
=======================

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

Creating Exercises
==================

.. toctree::
    :maxdepth: 1

    exercise_xml
    questiontypes/index
