.. include:: /global.rst

************
Translations
************

Overview
========
OpenTA supports multi-language content for course pages, exercises, and UI text. Authors can provide translations manually and optionally enable automatic machine translation as a fallback when a string is missing. It uses google translate and stores the result in the exercise file under an <alt> tag. 

Key Concepts
============

Language Codes
--------------
        - Comma-separated ISO codes (for example: ``en,sv,de``). 
        - The default is ``en``.

Source Language
---------------
        - The primary authoring language used when a translation is not available. 
        - It is the main part of the tag. Default is English

Auto-translation
-----------------
        - When enabled, there is an automatic translation for missing strings
        - It requires enabling the course option and configuring supported languages.
        - Auto-translation will not overwrite existing translations

Manual Overrides
----------------
        - By editing the "<alt lang='XX'>"  tag  you can fix the exercise translation and title
        - By deleting the alt tag and its contents and re-auto translate you can start from scratch.
        - By selecing the document icon, to the left of the envelope icon in the header, you can edit auto-translated terms that are shown on webpages that are not associated by an exercises. The most common adjustment is likely directory names. 

Language Selection
-----------------
        - Select preferred language; If translation does not exist, the default text is used.

Limitations
--------------
        - Auto translate uses google translate. Review the action of auto translations.

Auto Translations Of exercises
==========================

Activate Auto-translation
--------------------------
        - Choose to edit an exercise.  
        - If you see the translation toolbar (for example, a "default => lang" selector) while editing an exercise, auto-translation is already active
        - If no the translation toolbar says Auto Transltion is off 
                - the superuser must provide authentication with google   and ensure a  file named ``google_auth_string.txt`` exists in ``/subdomain-data/auth``.
                - the course admin must enable auto-translation in the course options
                - In Course -> Options, set a default and at least one secondary language (for example: ``en,sv``). Press Save. 

Translate an Exercise
---------------------
        - Edit an exercise using live edit. 
        - Choose the dropdown "default => lang" to select the target language. The xml be translated when the spinner stop.
        - Switch the selected language in the page header to the new language and adjust the XML alt text while editing. 
        - Fix translation errors in the <alt> tag
        - Update the exercise name if the translation is awkward, then Save.

Delete a translation in an exercise
---------------------------------
        - In the editing toolbar, choose the dropdown "lang" with a strikethrough and select the language to be deleted.

Make a translated language default
________________________

        - Sometimes, the default language is not a good base for further translations, such as if the default language is not english.  Let's say that the default language is Swedish and you want go over to English default.

          - Translate first to Swedish so that Swedish occurs in the alt tag.
          - Make sure to translate to English; you will now have two translations, swedish and englsh.
          - Choose the dropdown lang => default and choose English
          - The English translation will now appear as the default.

Fix Translations of Directories and Comments
--------------------------------------------
        - Click the small document icon in the header (left of the envelope). 
        - Adjust any unsatisfactory translations and Save.

Existing Translations Note
--------------------------
        - If a previously translated exercise shows the wrong exercise name, open it and Save again to refresh the translation.
