.. include:: /global.rst

************
Translations
************

Overview
========
OpenTA supports multi-language content for course pages, exercises, and UI text. Authors can provide translations manually and optionally enable automatic machine translation as a fallback when a string is missing.

Key Concepts
============

Language Codes
--------------
Comma-separated ISO codes (for example: ``en,sv,de``). The default is ``en``.

Source Language
---------------
The primary authoring language used when a translation is not available.

Auto-translation
-----------------
Optional fallback for missing strings; requires enabling the course option and configuring supported languages.

Manual Overrides
----------------
Prefer explicit author-provided translations where accuracy matters; they take precedence over auto-translation.

Student Selection
-----------------
When enabled, students can view content in their preferred language from the available set.

Limitations
--------------
Machine translations can be imprecise; review critical instructions, grading rubrics, and technical terms.

Auto Translations
=================

TL;DR
-----
If you see the translation toolbar (for example, a "default => lang" selector) while editing an exercise, auto-translation is already active.

Activate Auto-translation
--------------------------

Superuser Setup
^^^^^^^^^^^^^^^
Ensure a file named ``google_auth_string.txt`` exists in ``/subdomain-data/auth``.

Course Admin Setup
^^^^^^^^^^^^^^^^^^
In Course -> Options, set a default and at least one secondary language (for example: ``en,sv``). Press Save. Then enable "Use autotranslation" and Save again.

Translate an Exercise
---------------------
Edit an exercise using live edit. Choose the dropdown "default => lang" to select the target language. Switch the header language to the new language and adjust the XML alt text if needed. Update the exercise name if the translation is awkward, then Save.

Fix Translations of Directories and Comments
--------------------------------------------
Click the small document icon in the header (left of the envelope). Adjust any unsatisfactory translations and Save.

Existing Translations Note
--------------------------
If a previously translated exercise shows the wrong exercise name, open it and Save again to refresh the translation.
