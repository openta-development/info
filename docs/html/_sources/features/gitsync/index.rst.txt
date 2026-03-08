.. _gitsync_documentation:

Git Sync & Pull: User Guide
===========================

   **For Teachers**: This guide explains how to backup, restore, and
   share your OpenTA courses using GitHub. **For Developers**: Technical
   implementation details are in the second half of this document.



Table of Contents
-----------------

For Teachers and Course Administrators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. `What Is This? <#what-is-this>`__
2. `Quick Start <#quick-start>`__
3. `GitSync: Backing Up Your Course <#gitsync-backing-up-your-course>`__
4. `GitPull: Restoring or Updating Your
   Course <#gitpull-restoring-or-updating-your-course>`__
5. `Common Use Cases <#common-use-cases>`__
6. `Troubleshooting <#troubleshooting-for-users>`__

For Developers and System Administrators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

7. `Technical Implementation <#technical-implementation>`__
8. `API Reference <#api-reference>`__
9. `Development Notes <#development-notes>`__



.. _for-teachers-and-course-administrators-1:

For Teachers and Course Administrators
--------------------------------------

What Is This?
-------------

Git integration lets you backup and restore your OpenTA courses using
GitHub (like Dropbox for courses).

Three Simple Features
~~~~~~~~~~~~~~~~~~~~~


| Feature       | What It Does           | When to Use It             |
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
| **GitSync**   | Saves your course to   | Regular backups, before    |
|               | GitHub                 | major changes              |
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
| **GitPull     | Restores entire course | Setting up new server,     |
| (Full)**      | from GitHub            | disaster recovery          |
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
| **GitPull     | Updates only exercises | New exercise content       |
| (Exercises)** | from GitHub            | without affecting students |
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Why Use This?
~~~~~~~~~~~~~

**Problem**: You spend weeks building a course, then: - Your computer
crashes - You accidentally delete important files - You need to share
the course with another instructor - You want to deploy from development
to production

**Solution**: Git integration automatically backs up everything to
GitHub and lets you restore it anytime.



Quick Start
-----------

.. _gitsync_first_time_setup:

First Time Setup
~~~~~~~~~~~~~~~~

Set up a private github repo to accept the course data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- Login in to your github account; call it  ``https://github.com/<gituser>`` and choose "Repositories"
- Add a new Repoository :
        - Press "New" and and give it a name, suitably your course name <course>  without year identifiers. Thus if your openta course is ``ffm516-2025`` Your <course> is ``ffm516``
- Give it a description; suitably <course>-gitsync-backups
- Choose visibility privatge; **it must be Private**
- Choose Create repository
- Then go to top right of the page, click your avatar/icon and and from there choose Settings, **not the Settings you see in the toolbar!**
- Then go to the very left, bottom of the page in "Developer Settings" 
         - if you don't see it, you probably chosee the wrong Settings. It is Top right avatar -> settings -> far left - furthest down
- Press Developer Settings and choose Personal access tokens.
        - choose Tokens - Fine grained
        - generate a new token. It should be repo scoped to the precise repo you are using so you don't open up all your private repos. 
- Name your token, suitably <course>-gh-token
        - choose a suitable expiration; at least for the duration of the course if not longer.
        - choose "select repositories" and select the private repository you just create <gituser>/<course>
- Choose permissions :
        - Minimally, choose "Metadata" and "Contents"
- At that point choose Access: Read and Write for "Commit statuses and contents and verify your Contents and Commit statues are Read and Write
- Now copy the personal access token, starting with 'github\_pat_......'
- Now go back to your repo ``https://github.com/<gituser>/<course>``
- Now you will be able to define the variables you will use in the next step
        - GIT_REPO = <gituser>/<course>
        - GIT_USER = <gituser>
        - GIT_TOKEN = github_patxxxxxxx
        - GIT_ALLOW_PUSH = True

Insert sync capabilities into the course
^^^^^^^^^^^^^^^^^^^^^^^
- Choose Course -> Options
- At the very bottome, create new  Data (key/value) by pressing "Add Row" and insert the variables defined in the previous paragraph.
- Press Save
- After a reload, Press "Course" and a new "Gitsync" tab should open.
- First time sync may be time consuming  so make sure you can leave the browser open for c:a 10 minutes.
- Press GitSync
        - The branch is auto generated from your course name and server. You can't change this
        - You can edit the README file any way you want, and the Commit message as well, For instance
                - README: this is a sync of the openta course <course>-<year> 
                - Commit message : "initial commit"
- Preview readme if you want
- Then Sync and push. 


Restore from backup
^^^^^^^^^^^^^^

- Choose Course -> Options
- Allow PULL instead of PUSH
        - In course options, as above the field GIT_ALLOW_PUSH should then be
        - GIT_ALLOW_PULL = True

**Note**: You can’t have both enabled on the same course (safety
feature).

Daily Use
~~~~~~~~~

**To Backup Your Course:** 1. Go to ``/gitsync/``, selectable from
``Course`` in the main menu provided you have ``GITPUSH: true`` 2. Enter
a description of changes 3. Click “Sync to GitHub” 4. Wait 1-2 minutes
5. Done!

**To restore your course from Git:**

1. Go to ``/gitpull/``, selectable from ``Course`` in the main menu
   provided you have ``GITPUSH: true``
2. Select the entire course, and read the warning; the sync pull is destructive and will replace the cousre, not merge.
3. Wait 1-2 minutes
4. Done!

**To Update Exercises:** 1. Go to ``/gitpull/`` , selectable from
``Course`` in the main menu provided you have ``GIT_PULL : true`` 2.
Select “Exercises Only” or select 3. Click “Pull from GitHub” 4. Wait 30
seconds 5. Done!



GitSync: Backing Up Your Course
-------------------------------

When to Use GitSync
~~~~~~~~~~~~~~~~~~~

✅ **Use GitSync when you want to:** - Create a backup of your course -
Save your work before making big changes - Share your course with
another instructor - Move your course to a production server

How to Use GitSync
~~~~~~~~~~~~~~~~~~

Step 1: Access GitSync
^^^^^^^^^^^^^^^^^^^^^^

Navigate to ``/gitsync/`` in your browser, or click the GitSync link in
your course menu.

Step 2: Review What You’ll See
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The GitSync page shows:

**📦 Repository Information (Top Section)**

::

   Repository: github.com/university/cs101-course
   Repository size: 2.3 MB

   Recent commits on branch: openta-demo
   ┌─────────┬───────────────────────────────┬──────────────────┐
   │ Hash    │ Message                       │ Date             │
   ├─────────┼───────────────────────────────┼──────────────────┤
   │ a3f2b1c │ Added week 4 exercises        │ 2026-02-15 14:30 │
   │ 8d9e1f0 │ Fixed grading rubric          │ 2026-02-14 09:15 │
   │ 2c5a7b9 │ Updated README                │ 2026-02-13 16:45 │
   │ f1d3e8a │ Initial course setup          │ 2026-02-10 11:00 │
   └─────────┴───────────────────────────────┴──────────────────┘

**📝 Branch Name (Auto-Generated)**

::

   Branch: your-server (read-only)

This is automatically created from your server name. You don’t need to
change it.

**💬 Commit Message**

::

   Commit Message: Sync cs101 2026-02-16 10:30:45 UTC

Replace this with a description of your changes, like: - “Added quiz for
week 5” - “Fixed typo in assignment 2” - “Updated course schedule”

**📄 README Editor**

::

   # CS101: Introduction to Computer Science

   ## Course Information
   Instructor: Prof. Smith
   Semester: Spring 2026

   ## Setup Instructions
   ...

This README appears on your GitHub repository page. Edit it to document
your course.

**🔍 Preview README Button** Click this to see how your README will look
on GitHub (opens below the form).

**✅ Sync to GitHub Button** Click this to start the backup.

Step 3: Fill Out the Form
^^^^^^^^^^^^^^^^^^^^^^^^^

1. **Check recent commits** - See what changed since your last backup
2. **Enter commit message** - Describe what you changed today
3. **Edit README** (optional) - Update course documentation
4. **Click “Preview README”** (optional) - Check formatting
5. **Click “Sync to GitHub”** - Start the backup

Step 4: Wait for Completion
^^^^^^^^^^^^^^^^^^^^^^^^^^^

You’ll see a status page with a progress bar:

::

   Progress: ████████████████░░░░ 80%
   Status: Pushing to GitHub...

Typical messages you’ll see: - “Creating database backup” (10%) -
“Cloning repository” (20%) - “Syncing subdomain data” (50%) - “Staging
changes” (70%) - “Pushing to GitHub” (90%) - “Sync complete” (100%)

**Typical time**: 30 seconds to 2 minutes depending on course size

Step 5: Success!
^^^^^^^^^^^^^^^^

When done, you’ll see:

::

   ✅ Sync complete
      [Return to course]

Your course is now backed up on GitHub!

What Gets Backed Up?
~~~~~~~~~~~~~~~~~~~~

**✅ Included:** - All your exercises - Course database (students,
grades, settings) - Configuration files - README file - All course
materials

**❌ Excluded (cleaned up automatically):** - ``backups/`` folder
(temporary files) - ``xsl/`` folder (system files) - ``csv/`` folder
(exports) - ``html/`` folder (cache) - ``json-answer-backups`` folder that
safe copies all student correct answers into the file system for up to the second restores.

These folders are excluded because they’re temporary or regenerated
automatically.

Can I Cancel?
~~~~~~~~~~~~~

Yes! Click the “Cancel” button on the status page.

**What happens when you cancel:** - ⏸️ **During “Cloning”**: Safe to
cancel, no changes made - ⏸️ **During “Syncing”**: Safe to cancel, no
changes made to GitHub - ⚠️ **During “Pushing”**: May have partial push,
but you can run sync again

**Best practice**: Let it finish (usually under 2 minutes), but cancel
if you need to stop immediately.



GitPull: Restoring or Updating Your Course
------------------------------------------

When to Use GitPull
~~~~~~~~~~~~~~~~~~~

✅ **Use GitPull (Full) when you want to:** - Set up a course on a new
server - Restore from backup after a problem - Deploy a course from
development to production - Get an exact copy of another instructor’s
course

✅ **Use GitPull (Exercises) when you want to:** - Update exercise
content without affecting student data - Get new exercises from GitHub -
Sync exercises from another instructor

❌ **Don’t use GitPull (Full) if:** - You have students enrolled (their
data will be replaced) - You just want to update exercises (use
Exercises mode instead)

How to Use GitPull
~~~~~~~~~~~~~~~~~~

Step 1: Access GitPull
^^^^^^^^^^^^^^^^^^^^^^

Navigate to ``/gitpull/`` in your browser, or click the GitPull link in
your course menu.

Step 2: Understand What You’ll See
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The GitPull page shows:

**📦 Repository Information**

::

   Repository: github.com/university/cs101-course
   Branch: test3b.openta-demo

**⚠️ IMPORTANT: Choose Your Pull Mode**

You’ll see TWO options:



**Option 1: 🔴 Full Pull - Replace all subdomain data from GitHub**

::

   ⚠️ WARNING: This will DELETE all local files and replace with GitHub

   What will be DELETED:
   • All files in your course directory
   • Current database (students, grades, settings)
   • All local configuration

   Old files will be moved to: /subdomain-data/deleted/cs101-20260216-103045/
   (You can recover them if needed)

**When to choose Full Pull:** - Fresh installation on new server -
Complete disaster recovery - Deploying finished course to production -
You want EXACTLY what’s in GitHub

**Time required**: 1-3 minutes + you’ll be logged out



**Option 2: 🔵 Exercises Only - Update only exercises/ directory**

::

   ℹ️ This preserves your database and configuration

   What will be PRESERVED:
   • Database (students, grades, settings)
   • Configuration files
   • All non-exercise files

   What will be UPDATED:
   • exercises/ directory only

**When to choose Exercises Only:** - Course already set up with students
- Just need new exercise content - Want to keep everything except
exercises

**Time required**: 30-60 seconds + no logout required



Step 3: Make Your Choice
^^^^^^^^^^^^^^^^^^^^^^^^

Click the radio button for your desired mode: - ○ Full Pull (complete
replacement) - ○ Exercises Only (just exercises)

Step 4: Click “Pull from GitHub”
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Step 5: Watch Progress
^^^^^^^^^^^^^^^^^^^^^^

**For Full Pull:**

::

   Progress: ████████████████████ 100%

   You'll see these messages:
   1. Moving existing directory to deleted/ (5%)
   2. Initializing git repository (10%)
   3. Fetching from remote (30%)
   4. Resetting to remote (force) (60%)
   5. Cleaning untracked files (80%)
   6. Activating course (db_rename_database) (90%)
      ⏱️ This step can take 2-5 minutes for large databases
   7. Done (commit a3f2b1c). Press Return to the course in 30 seconds (100%)

**For Exercises Only:**

::

   Progress: ████████████████████ 100%

   Simpler and faster:
   1. Initializing git repository (10%)
   2. Fetching from remote (sparse: exercises/) (30%)
   3. Resetting to remote (exercises only) (60%)
   4. Cleaning untracked files (80%)
   5. Done (commit a3f2b1c) (100%)

Step 6: After Completion
^^^^^^^^^^^^^^^^^^^^^^^^

**After Full Pull:**

1. **You’ll be logged out automatically**
2. Your old data is safe in
   ``/subdomain-data/deleted/cs101-{timestamp}/``
3. Log in with the credentials from the restored course
4. Test the course:

   -  ✅ Check course loads
   -  ✅ Test a few exercises
   -  ✅ Verify settings are correct

5. If everything works, you can delete the backup from
   ``/subdomain-data/deleted/``

**After Exercises Only:**

1. **No logout required**
2. Refresh your exercise list
3. New exercises are immediately available
4. Students and all data unchanged

.. _can-i-cancel-1:

Can I Cancel?
~~~~~~~~~~~~~

Yes, but be careful!

**Full Pull Cancellation:**

-  ✅ **Safe to cancel** during steps 1-3 (before 60%)

   -  Old data still exists or safely backed up
   -  Easy recovery: move files back from deleted/

-  ⚠️ **RISKY to cancel** during steps 4-6 (after 60%)

   -  Database may be partially restored
   -  Git state may be inconsistent
   -  Recovery may require manual steps

**Exercises Only Cancellation:**

-  ✅ **Safe to cancel anytime**

   -  Only exercises affected
   -  Database never touched
   -  Just run again to complete

**Best practice**: Let it finish, especially for Full Pull. Only cancel
if absolutely necessary.



Common Use Cases
----------------

Use Case 1: Daily Backups
~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Regular backups in case something goes wrong

**How often**: Daily or weekly, or before major changes

**Steps:** 1. Go to ``/gitsync/`` 2. Commit message: “Daily backup -
{today’s date}” 3. Click “Sync to GitHub” 4. Done in 1-2 minutes

**Why**: If you accidentally delete something or need to go back, you
can restore from any backup.



Use Case 2: Sharing a Course with Another Instructor
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Instructor A gives course to Instructor B

**Instructor A (has the course):** 1. Configure course with
``GIT_ALLOW_PUSH: true`` 2. Go to ``/gitsync/`` 3. Edit README with
instructions for Instructor B 4. Commit message: “Complete course ready
for deployment” 5. Click “Sync to GitHub” 6. Tell Instructor B: “Course
is ready in GitHub repo”

**Instructor B (wants the course):** 1. Create or use existing subdomain
2. Configure course with ``GIT_ALLOW_PULL: true`` 3. Go to ``/gitpull/``
4. Select “Full Pull” 5. Click “Pull from GitHub” 6. Wait 2-3 minutes 7.
Log in with credentials from Instructor A 8. Customize for your
institution

**Result**: Instructor B has an exact copy of Instructor A’s course.



Use Case 3: Development → Production Deployment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Build course on dev server, deploy to production

**On Development Server (``dev.openta.org``):** 1. Build and test your
course 2. Configure with ``GIT_ALLOW_PUSH: true`` 3. Go to ``/gitsync/``
4. Commit message: “Ready for production” 5. Click “Sync to GitHub”

**On Production Server (``openta.org``):** 1. Create subdomain for
course 2. Configure with ``GIT_ALLOW_PULL: true`` 3. Go to ``/gitpull/``
4. Select “Full Pull” 5. Click “Pull from GitHub” 6. Test everything
works 7. Open course to students

**Result**: Production has exact copy of development course.



Use Case 4: Weekly Exercise Updates
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Update exercises without affecting student data

**Setup** (one time): - Production course running with students enrolled
- Course configured with ``GIT_ALLOW_PULL: true`` - Exercises updated in
GitHub by another instructor

**Weekly Update Process:** 1. Go to ``/gitpull/`` 2. Select “Exercises
Only” 3. Click “Pull from GitHub” 4. Wait 30 seconds 5. New exercises
immediately available

**Result**: Students see new exercises, their progress and grades
unchanged.



Use Case 5: Disaster Recovery
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Problem**: Something broke, need to restore

**Steps:** 1. Don’t panic! Old data is backed up 2. Go to ``/gitpull/``
3. Select “Full Pull” 4. Click “Pull from GitHub” 5. Old broken data
moved to ``/subdomain-data/deleted/`` 6. Course restored from last
GitHub backup 7. Log in and verify everything works

**If it’s still broken**: Recover older backup - Check GitHub commit
history - Find last known-good commit - Contact admin to restore from
specific commit

**Result**: Course restored to working state.



Best Practices for Teachers
---------------------------

For GitSync (Backups)
~~~~~~~~~~~~~~~~~~~~~

**✅ DO:** - Sync before making major changes - Write clear commit
messages - Sync regularly (daily or weekly) - Review recent commits
before syncing - Keep your GitHub repo private

**❌ DON’T:** - Use generic messages like “update” or “sync” - Forget to
sync before risky operations - Make your repo public (contains student
data) - Navigate away during sync - Cancel unless necessary

For GitPull (Restore)
~~~~~~~~~~~~~~~~~~~~~

**✅ DO:** - Use “Exercises Only” when possible - Test on development
server first - Verify old data in deleted/ folder after Full Pull - Have
credentials ready for Full Pull - Coordinate with team before pulling

**❌ DON’T:** - Use Full Pull if you have active students (unless
intentional) - Delete old data immediately after Full Pull (test first)
- Cancel during critical stages (60%+) - Use both push and pull on same
course - Pull without telling other instructors

Pre-Operation Checklist
~~~~~~~~~~~~~~~~~~~~~~~

Before running any operation, check:

-  ☐ GitHub credentials configured correctly
-  ☐ Repository exists and is accessible
-  ☐ Correct mode selected (Full vs Exercises)
-  ☐ Coordinated with team (if applicable)
-  ☐ Tested on non-production first (for new workflows)
-  ☐ Have time to monitor progress (1-5 minutes)
-  ☐ Know where to find documentation if problems occur



Troubleshooting for Users
-------------------------

Common Problems and Solutions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

“Pull Disabled” or “Push Disabled”
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Problem**: Flag not set in course configuration

**Solution**: 1. Ask your admin to add to course.data: - For backup:
``"GIT_ALLOW_PUSH": true`` - For restore: ``"GIT_ALLOW_PULL": true`` 2.
Refresh page 3. Try again



“Conflicting Configuration”
^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Problem**: Both push and pull flags are enabled

**Solution**: 1. Decide which you need: - Development server: Use push
only - Production server: Use pull only 2. Ask admin to set one flag to
``false`` 3. You can’t have both (prevents sync conflicts)



“Repository must be private”
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Problem**: Trying to GitSync to a public repository

**Solution**: 1. Go to GitHub repository settings 2. Change visibility
to “Private” 3. Try GitSync again

**Why**: GitSync refuses public repos because courses contain student
data.



“Git operation timed out”
^^^^^^^^^^^^^^^^^^^^^^^^^

**Problem**: Operation took too long

**Common causes**: - Very large course (>100 MB) - Slow network
connection - GitHub is slow

**Solution**: 1. Check your internet connection 2. Try again (might be
temporary) 3. If persistent, contact admin to increase timeout



“Repository does not exist or is not accessible”
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Problem**: Can’t access GitHub repository

**Check**: 1. Repository name correct? Format: ``username/repo-name`` 2.
For private repos: Are credentials correct? 3. GitHub token has ``repo``
permission? 4. Repository actually exists on GitHub?

**Solution**: Fix configuration and try again



“Branch not found”
^^^^^^^^^^^^^^^^^^

**Problem**: Branch doesn’t exist in repository

**For GitPull**: - Branch name format: ``{subdomain}.{servername}`` -
Example: ``cs101.openta-demo`` - This branch must exist in GitHub

**Solution**: 1. Check branch name on status page 2. Go to GitHub and
verify branch exists 3. If using new subdomain, push from source first
4. Or create branch manually in GitHub



“Can’t log in after Full Pull”
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Problem**: Credentials changed after restore

**Why**: Full Pull restores the database, which includes user accounts

**Solution**: 1. Use credentials from the restored course (check GitHub
README) 2. If unknown, recover old database:
``Old database is in: /subdomain-data/deleted/{subdomain}-{timestamp}/``
3. Contact admin to restore old database if needed



“Task disappeared”
^^^^^^^^^^^^^^^^^^

**Problem**: Navigated away and task is gone

**Why**: Tasks auto-delete after 20 minutes

**Solution**: Start the operation again (safe to re-run)



When to Contact Your Administrator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Contact admin if:

-  Configuration flags need to be changed
-  GitHub credentials need to be updated
-  Timeouts need to be increased
-  Manual recovery needed after failed Full Pull
-  Can’t access deleted/ directory
-  Database restoration failed
-  Need to restore from specific old commit



Recovery Procedures
~~~~~~~~~~~~~~~~~~~

Recovering from Failed Full Pull
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If Full Pull failed and course is broken:

1. **Find your backup**:

   ::

      Location: /subdomain-data/deleted/{subdomain}-{timestamp}/
      Example: /subdomain-data/deleted/cs101-20260216-103045/

2. **Contact your administrator** to:

   -  Stop application servers
   -  Move backup back to main location
   -  Restart servers

3. **Alternative**: Run Full Pull again

   -  Often fixes partial failures
   -  Gets fresh copy from GitHub

Recovering Specific Files
^^^^^^^^^^^^^^^^^^^^^^^^^

If you just need one file from backup:

1. Ask admin for access to ``/subdomain-data/deleted/``
2. Find the backup folder with correct timestamp
3. Copy specific file you need
4. Replace in current course directory



Quick Reference Cards
---------------------

GitSync Quick Reference
~~~~~~~~~~~~~~~~~~~~~~~

::

   ┌─────────────────────────────────────────────────┐
   │ GITSYNC - BACKUP YOUR COURSE                    │
   ├─────────────────────────────────────────────────┤
   │                                                 │
   │ When:  Before changes, regularly                │
   │ Time:  1-2 minutes                              │
   │ Where: /gitsync/                                │
   │                                                 │
   │ Steps:                                          │
   │  1. Enter commit message                        │
   │  2. (Optional) Edit README                      │
   │  3. Click "Sync to GitHub"                      │
   │  4. Wait for completion                         │
   │                                                 │
   │ Safe to cancel: Yes (before pushing)            │
   │ Requires: GIT_ALLOW_PUSH: true                  │
   │ Repository: Private only                        │
   └─────────────────────────────────────────────────┘

GitPull Quick Reference
~~~~~~~~~~~~~~~~~~~~~~~

::

   ┌─────────────────────────────────────────────────┐
   │ GITPULL - RESTORE OR UPDATE YOUR COURSE         │
   ├─────────────────────────────────────────────────┤
   │                                                 │
   │ FULL PULL                                       │
   │ When:  New setup, disaster recovery             │
   │ Time:  1-5 minutes                              │
   │ Safe to cancel: Only before 60%                 │
   │ Requires: GIT_ALLOW_PULL: true                  │
   │ Warning: You'll be logged out                   │
   │                                                 │
   │ Steps:                                          │
   │  1. Select "Full Pull"                          │
   │  2. Click "Pull from GitHub"                    │
   │  3. Wait for completion                         │
   │  4. Log in with restored credentials            │
   │                                                 │
   ├─────────────────────────────────────────────────┤
   │                                                 │
   │ EXERCISES ONLY                                  │
   │ When:  Update exercises, preserve database      │
   │ Time:  30-60 seconds                            │
   │ Safe to cancel: Yes (anytime)                   │
   │ Requires: GIT_ALLOW_PULL: true                  │
   │ Warning: None, no logout                        │
   │                                                 │
   │ Steps:                                          │
   │  1. Select "Exercises Only"                     │
   │  2. Click "Pull from GitHub"                    │
   │  3. Wait for completion                         │
   │  4. Refresh page to see new exercises           │
   │                                                 │
   └─────────────────────────────────────────────────┘



.. _for-developers-and-system-administrators-1:

For Developers and System Administrators
----------------------------------------

   The following sections contain technical implementation details for
   developers and system administrators.



Technical Implementation
------------------------

Architecture Overview
~~~~~~~~~~~~~~~~~~~~~

Git integration uses Django-RQ (Redis Queue) for asynchronous task
processing. Long-running git operations execute in background workers,
preventing web server blocking.

**Component Stack:** - Django views (sync/pull forms and status pages) -
Django-RQ task queue (async processing) - Git subprocess commands
(clone, fetch, push, reset) - GitHub API (repo validation, commit
history) - PostgreSQL/SQLite (task status, course data)

Code Structure
~~~~~~~~~~~~~~

**Core Files:**

::

   course/views/views.py          - All git views and pipeline functions
   course/urls.py                 - URL routing for git features
   workqueue/tasks.py             - Task wrappers for django-rq
   workqueue/util.py              - Task enqueueing utilities
   workqueue/models.py            - QueueTask model

   templates/gitsync/form.html    - GitSync form page
   templates/gitsync/status.html  - GitSync status page
   templates/gitpull/confirm.html - GitPull confirmation page
   templates/gitpull/status.html  - GitPull status page
   templates/gitsync/layout.html  - Shared layout template
   templates/gitsync/error.html   - Error page template

View Functions
~~~~~~~~~~~~~~

GitSync Views
^^^^^^^^^^^^^

**``GitSyncRedirectView(request)``** - Decorator:
``@user_passes_test(lambda u: u.is_superuser)`` - URL: ``/gitsync/`` -
Function: Redirects to course-specific GitSync or shows course picker -
Returns: Redirect or course selection page

**``CourseGitSyncView(request, course_pk)``** - Decorator:
``@user_passes_test(lambda u: u.is_superuser)`` - URL:
``/course/<pk>/gitsync/`` - GET: Renders form with repo info, commits,
README editor - POST: Validates config, enqueues task, redirects to
status - Checks: ``GIT_ALLOW_PUSH`` must be true, repo must be private

**``CourseGitSyncStatusView(request, course_pk, task_id)``** -
Decorator: ``@user_passes_test(lambda u: u.is_superuser)`` - URL:
``/course/<pk>/gitsync/status/<task_id>/`` - Function: Displays
real-time progress, polls ``/queuetask/<task_id>/`` - Returns: Status
page with progress bar and current status

**``CourseGitSyncCancelView(request, course_pk, task_id)``** - URL:
``/course/<pk>/gitsync/cancel/<task_id>/`` - Function: Marks task as
done with “Cancelled” status - Returns: JSON response

GitPull Views
^^^^^^^^^^^^^

**``GitPullRedirectView(request)``** - Decorator:
``@user_passes_test(lambda u: u.is_superuser)`` - URL: ``/gitpull/`` -
Function: Redirects to course-specific GitPull or shows course picker

**``CourseGitPullView(request, course_pk)``** - Decorator:
``@user_passes_test(lambda u: u.is_superuser)`` - URL:
``/course/<pk>/gitpull/`` - GET: Renders confirmation page with pull
scope options - POST: Validates flags, enqueues task, redirects to
status - Checks: ``GIT_ALLOW_PULL`` true, ``GIT_ALLOW_PUSH`` false, repo
exists

**``CourseGitPullStatusView(request, course_pk, task_id)``** -
Decorator: ``@user_passes_test(lambda u: u.is_superuser)`` - URL:
``/course/<pk>/gitpull/status/<task_id>/`` - Function: Displays
real-time progress - Returns: Status page

**``CourseGitPullCancelView(request, course_pk, task_id)``** - URL:
``/course/<pk>/gitpull/cancel/<task_id>/`` - Function: Marks task as
done with “Cancelled” status

Pipeline Functions
~~~~~~~~~~~~~~~~~~

``_gitsync_pipeline(task, sync_subdomain, git_user, git_token, git_repo, branch, commit_msg, source_path)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Executes GitSync (push) operation.

**Steps:**

1.  **Create Database Backup** (Progress: 5%)

    .. code:: python

       task.status = "Creating database backup"
       task.save()
       # Uses course.backup_utilities to create backup

2.  **Setup Git Environment** (Progress: 10%)

    .. code:: python

       git_env = {
           "GIT_AUTHOR_NAME": git_user,
           "GIT_AUTHOR_EMAIL": f"{git_user}@users.noreply.github.com",
           "GIT_COMMITTER_NAME": git_user,
           "GIT_COMMITTER_EMAIL": f"{git_user}@users.noreply.github.com",
           "GIT_TERMINAL_PROMPT": "0",
       }
       clone_url = f"https://{git_user}:{git_token}@github.com/{git_repo}.git"

3.  **Clone Repository** (Progress: 20%)

    .. code:: python

       subprocess.run([
           "git", "clone", "--depth", "1",
           "--branch", branch,
           clone_url, temp_dir
       ], timeout=60, env=git_env)

4.  **Checkout Branch** (Progress: 30%)

    -  Checks if branch exists:
       ``git show-ref --verify refs/heads/{branch}``
    -  If not: ``git checkout -b {branch}``
    -  If exists: ``git checkout {branch}``

5.  **Clean Excluded Directories** (Progress: 40%)

    .. code:: python

       excluded_dirs = ["backups", "xsl", "csv", "html"]
       for dir in excluded_dirs:
           dir_path = os.path.join(repo_path, subdomain, dir)
           if os.path.exists(dir_path):
               shutil.rmtree(dir_path)

6.  **Rsync Subdomain Data** (Progress: 50%)

    .. code:: python

       subprocess.run([
           "rsync", "-av", "--delete",
           "--exclude=backups",
           "--exclude=xsl",
           "--exclude=csv",
           "--exclude=html",
           f"{source_path}/", f"{repo_path}/{subdomain}/"
       ])

7.  **Stage Changes** (Progress: 70%)

    .. code:: python

       subprocess.run(["git", "add", "."], env=git_env)

8.  **Check for Changes** (Progress: 75%)

    .. code:: python

       result = subprocess.run(
           ["git", "diff", "--cached", "--quiet"],
           env=git_env
       )
       if result.returncode == 0:
           task.status = "No changes to commit"
           return

9.  **Commit** (Progress: 80%)

    .. code:: python

       subprocess.run([
           "git", "commit", "-m",
           f"{commit_msg}\n\nCo-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
       ], env=git_env)

10. **Push to Remote** (Progress: 90%)

    .. code:: python

       # Check if branch exists remotely
       remote_check = subprocess.run([
           "git", "ls-remote", "--heads", "origin", branch
       ], capture_output=True, env=git_env)

       if not remote_check.stdout:
           # New branch
           subprocess.run([
               "git", "push", "-u", "origin", branch
           ], timeout=120, env=git_env)
       else:
           # Existing branch - force with lease
           subprocess.run(["git", "fetch", "--depth", "1", "origin", branch], env=git_env)
           subprocess.run([
               "git", "push", "--force-with-lease", "origin", branch
           ], timeout=120, env=git_env)

11. **Cleanup** (Progress: 100%)
    ``python     shutil.rmtree(temp_dir)     task.status = "Sync complete"     task.progress = 100     task.done = True     task.save()``

**Error Handling:**

.. code:: python

   except subprocess.CalledProcessError as e:
       stderr = e.stderr.decode(errors="replace") if e.stderr else str(e)
       task.status = f"Command failed: {stderr}"[:250]
       task.done = True
       task.save()
   except subprocess.TimeoutExpired:
       task.status = "Git operation timed out"
       task.done = True
       task.save()

``_gitpull_pipeline(task, pull_subdomain, git_user, git_token, git_repo, branch, source_path)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Executes GitPull full operation.

**Steps:**

1.  **Move Existing Directory** (Progress: 5%)

    .. code:: python

       if os.path.exists(source_path):
           deleted_dir = "/subdomain-data/deleted"
           os.makedirs(deleted_dir, exist_ok=True)
           timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
           deleted_target = os.path.join(deleted_dir, f"{pull_subdomain}-{timestamp}")
           shutil.move(source_path, deleted_target)
       os.makedirs(source_path, exist_ok=True)

2.  **Initialize Git Repository** (Progress: 10%)

    .. code:: python

       git_dir = os.path.join(source_path, ".git")
       git_env = {
           "GIT_DIR": git_dir,
           "GIT_WORK_TREE": source_path,
           "GIT_TERMINAL_PROMPT": "0",
           "GIT_ASKPASS": "echo",
       }

       subprocess.run(["git", "init", source_path], check=True)
       subprocess.run(["git", "config", "user.name", git_user], env=git_env)
       subprocess.run(["git", "config", "user.email", f"{git_user}@users.noreply.github.com"], env=git_env)

       if git_user and git_token:
           clone_url = f"https://{git_user}:{git_token}@github.com/{git_repo}.git"
       else:
           clone_url = f"https://github.com/{git_repo}.git"

       subprocess.run(["git", "remote", "add", "origin", clone_url], env=git_env)

3.  **Enable Sparse-Checkout** (Progress: 15%)

    .. code:: python

       subprocess.run(["git", "config", "core.sparseCheckout", "true"], env=git_env)
       sparse_file = os.path.join(git_dir, "info", "sparse-checkout")
       os.makedirs(os.path.dirname(sparse_file), exist_ok=True)
       with open(sparse_file, "w") as f:
           f.write("/*\n")  # Include everything for full pull

4.  **Fetch from Remote** (Progress: 30%)

    .. code:: python

       subprocess.run([
           "git", "fetch", "--force", "--depth", "1",
           "origin", branch
       ], timeout=120, env=git_env)

5.  **Reset to Remote** (Progress: 60%)

    .. code:: python

       subprocess.run([
           "git", "reset", "--hard", f"origin/{branch}"
       ], env=git_env)

6.  **Clean Untracked Files** (Progress: 80%)

    .. code:: python

       subprocess.run(["git", "clean", "-fd"], env=git_env)

7.  **Align Exercises Directory** (Progress: 85%)

    .. code:: python

       # Rename exercises/<pulled_key>/ to match existing course_key
       from course.models import Course
       course = Course.objects.using(pull_subdomain).first()
       if course:
           existing_key = str(course.course_key)
           exercises_path = os.path.join(source_path, "exercises")
           # Rename pulled directory to match existing key
           # (implementation details...)

8.  **Activate Course** (Progress: 90%)

    .. code:: python

       backend_root = os.path.dirname(os.path.dirname(backend_dir))
       db_rename_script = os.path.join(backend_root, "db_rename_database")
       subprocess.run([db_rename_script, pull_subdomain], timeout=300)

9.  **Update OpenTA Site URL** (Progress: 95%)

    .. code:: python

       # Update opentasite in database settings
       # (SQL update command)

10. **Logout and Reload** (Progress: 98%)
    ``python     from course.views.views import logout_and_reload     logout_and_reload(pull_subdomain)``

11. **Completion** (Progress: 100%)

    .. code:: python

       commit_hash = subprocess.run(
           ["git", "rev-parse", "HEAD"],
           capture_output=True, env=git_env
       ).stdout.decode().strip()[:8]

       task.status = f"Done (commit {commit_hash}). Press Return to the course in about 30 seconds"
       task.progress = 100
       task.done = True
       task.save()

``_gitpull_exercises_pipeline(task, pull_subdomain, git_user, git_token, git_repo, branch, source_path)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Executes GitPull exercises-only operation using sparse-checkout.

**Key Differences from Full Pull:**

1. **No Directory Move** - Preserves existing files

2. **Sparse-Checkout Configuration**:

   .. code:: python

      with open(sparse_file, "w") as f:
          f.write("exercises/\n")
          f.write("README.md\n")
          f.write("database.conf\n")

3. **No Database Restoration** - Skips db_rename_database

4. **No Session Clearing** - No logout required

**Sparse-Checkout Benefits:** - Only fetches specified directories from
GitHub - Faster than full clone - Preserves all other files (database,
config, etc.) - Safe for production with active students

Task Management
~~~~~~~~~~~~~~~

QueueTask Model
^^^^^^^^^^^^^^^

.. code:: python

   class QueueTask(models.Model):
       owner = models.ForeignKey(User)
       name = models.CharField(max_length=50)  # "gitsync", "gitpull", "gitpull_exercises"
       subdomain = models.CharField(max_length=100)
       progress = models.IntegerField(default=0)  # 0-100
       status = models.CharField(max_length=255)
       done = models.BooleanField(default=False)
       result_file = models.CharField(max_length=500, blank=True)
       date = models.DateTimeField(auto_now_add=True)

Task Lifecycle
^^^^^^^^^^^^^^

1. **Creation** via ``workqueue.util.enqueue_task()``:

   .. code:: python

      task_id = workqueue.enqueue_task(
          "gitsync",              # name
          run_gitsync_pipeline,   # function
          subdomain=subdomain,    # for QueueTask record
          sync_subdomain=subdomain,  # passed to pipeline
          git_user=git_user,
          # ... other kwargs
      )

2. **Execution** by django-rq worker:

   -  Worker picks task from Redis queue
   -  Calls pipeline function with task object and kwargs
   -  Pipeline updates task.progress and task.status throughout

3. **Polling** by client:

   .. code:: python

      GET /queuetask/<task_id>/

      Returns:
      {
          "status": "Pushing to GitHub",
          "progress": 85,
          "done": false
      }

4. **Auto-Deletion** after 20 minutes:

   -  Managed by django-rq or custom cleanup
   -  Prevents database bloat

Parameter Naming Convention
^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Important**: ``enqueue_task()`` consumes ``subdomain=`` kwarg for the
QueueTask record. Pipeline functions use different parameter names:

.. code:: python

   # GitSync
   workqueue.enqueue_task(
       "gitsync",
       run_gitsync_pipeline,
       subdomain=subdomain,        # For QueueTask
       sync_subdomain=subdomain,   # For pipeline function
       # ...
   )

   # GitPull
   workqueue.enqueue_task(
       "gitpull",
       run_gitpull_pipeline,
       subdomain=subdomain,        # For QueueTask
       pull_subdomain=subdomain,   # For pipeline function
       # ...
   )

Error Handling
~~~~~~~~~~~~~~

Subprocess Errors
^^^^^^^^^^^^^^^^^

All subprocess calls wrapped in try-except:

.. code:: python

   try:
       result = subprocess.run(
           cmd,
           capture_output=True,
           timeout=timeout,
           check=True
       )
   except subprocess.CalledProcessError as e:
       stderr = e.stderr.decode(errors="replace") if e.stderr else str(e)
       logger.error(f"[GitSync] subprocess error: {stderr}")
       task.status = f"Command failed: {stderr}"[:250]  # Truncate to 250 chars
       task.done = True
       task.save()
       return
   except subprocess.TimeoutExpired:
       logger.error(f"[GitSync] Operation timed out")
       task.status = "Git operation timed out"
       task.done = True
       task.save()
       return

Timeouts
^^^^^^^^

================== ======= ============================
Operation          Timeout Reason
================== ======= ============================
Git clone          60s     Should be fast with –depth 1
Git fetch          120s    May pull more data
Git push           120s    Uploading course data
db_rename_database 300s    Large database restoration
================== ======= ============================

GitHub API Checks
^^^^^^^^^^^^^^^^^

**GitSync** (before allowing sync):

.. code:: python

   resp = http_requests.get(
       f"https://api.github.com/repos/{git_repo}",
       headers={"Authorization": f"token {git_token}"},
       timeout=15
   )
   repo_data = resp.json()
   if not repo_data.get("private"):
       return _gitsync_error("Repository must be private")

**GitPull** (before allowing pull):

.. code:: python

   resp = http_requests.get(
       f"https://api.github.com/repos/{git_repo}",
       headers={"Authorization": f"token {git_token}"},
       timeout=15
   )
   if resp.status_code == 404:
       return _gitsync_error("Repo does not exist or is not accessible")

Security Considerations
~~~~~~~~~~~~~~~~~~~~~~~

1. **Superuser Only**:

   .. code:: python

      @user_passes_test(lambda u: u.is_superuser)
      def CourseGitSyncView(request, course_pk):
          # ...

2. **Repository Visibility**:

   -  GitSync: Requires private repositories (checked via API)
   -  GitPull: Allows both public and private

3. **Token Security**:

   -  Stored in course.data (database, encrypted at rest)
   -  Passed via environment variables (not command line args)
   -  Never logged or displayed to users
   -  Not included in error messages

4. **CSRF Protection**:

   .. code:: python

      csrf_token = get_token(request)
      # Included in all forms

5. **Path Validation**:

   .. code:: python

      source_path = os.path.join(settings.VOLUME, subdomain)
      # settings.VOLUME restricted to /subdomain-data/
      # Prevents path traversal attacks

6. **Safety Flags**:

   -  Mutual exclusion: ``GIT_ALLOW_PUSH`` and ``GIT_ALLOW_PULL`` cannot
      both be true
   -  Explicit opt-in required for pull (safety feature)
   -  Checked on every request

7. **Session Management**:

   -  Full pull clears all sessions via ``logout_and_reload()``
   -  Prevents unauthorized access with old credentials
   -  Forces re-authentication with restored database

8. **Backup Before Replace**:

   -  Full pull moves existing data to ``/subdomain-data/deleted/``
   -  Allows recovery if pull goes wrong
   -  Preserved indefinitely (manual cleanup)

Configuration
~~~~~~~~~~~~~

Settings Required
^^^^^^^^^^^^^^^^^

.. code:: python

   # settings.py
   VOLUME = "/subdomain-data"  # Production
   # VOLUME = "/tmp/subdomain-data"  # Test

Course Data Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: python

   # For GitSync
   course.data = {
       "GIT_USER": "username",
       "GIT_TOKEN": "ghp_...",
       "GIT_REPO": "username/repo-name",
       "GIT_ALLOW_PUSH": True,
       "GIT_ALLOW_PULL": False,  # Or absent
   }

   # For GitPull
   course.data = {
       "GIT_USER": "username",  # Optional for public repos
       "GIT_TOKEN": "ghp_...",  # Optional for public repos
       "GIT_REPO": "username/repo-name",
       "GIT_ALLOW_PUSH": False,  # Or absent
       "GIT_ALLOW_PULL": True,
   }

Branch Persistence
^^^^^^^^^^^^^^^^^^

-  GitSync: Branch saved to ``/subdomain-data/<subdomain>/.git-branch``
-  Default branch derived from hostname:

   -  ``ffm516.openta-demo.org`` → ``openta-demo``

-  GitPull: Branch format ``{subdomain}.{servername}``

   -  ``test3b`` on ``openta-demo.org`` → ``test3b.openta-demo``

Commit History Limit
^^^^^^^^^^^^^^^^^^^^

.. code:: python

   # course/views/views.py, line 669
   commits_resp = http_requests.get(
       f"https://api.github.com/repos/{git_repo}/commits",
       params={"sha": branch_val, "per_page": 4},  # Change to 10, 20, etc.
   )

Styling
~~~~~~~

CSS theme for Git integration UI:

.. code:: css

   /* Dark blue theme */
   --primary-color: #1e3a8a;
   --card-width: 80%;
   --max-width: 900px;

   /* Progress bar */
   progress {
       height: 24px;
       border-radius: 12px;
   }

   /* Commit history table */
   .commits-table {
       width: 100%;
       border-collapse: collapse;
   }

Layout: - 80% width card layout - Centered content - Responsive table
for commit history - Real-time status updates with progress bar -
Auto-refresh every 2 seconds on status page



API Reference
-------------

URL Patterns
~~~~~~~~~~~~

.. code:: python

   # course/urls.py

   # GitSync URLs
   url(r"^gitsync/$", GitSyncRedirectView),
   url(r"^course/(?P<course_pk>[0-9]+)/gitsync/$", CourseGitSyncView),
   url(r"^course/(?P<course_pk>[0-9]+)/gitsync/status/(?P<task_id>[0-9]+)/$", CourseGitSyncStatusView),
   url(r"^course/(?P<course_pk>[0-9]+)/gitsync/cancel/(?P<task_id>[0-9]+)/$", CourseGitSyncCancelView),

   # GitPull URLs
   url(r"^gitpull/$", GitPullRedirectView),
   url(r"^course/(?P<course_pk>[0-9]+)/gitpull/$", CourseGitPullView),
   url(r"^course/(?P<course_pk>[0-9]+)/gitpull/status/(?P<task_id>[0-9]+)/$", CourseGitPullStatusView),
   url(r"^course/(?P<course_pk>[0-9]+)/gitpull/cancel/(?P<task_id>[0-9]+)/$", CourseGitPullCancelView),

   # Shared task status URL
   url(r"^queuetask/(?P<task_id>[0-9]+)/$", QueueTaskStatusView),

Task Enqueueing Examples
~~~~~~~~~~~~~~~~~~~~~~~~

GitSync (Push)
^^^^^^^^^^^^^^

.. code:: python

   import workqueue.util as workqueue
   from workqueue.tasks import run_gitsync_pipeline

   task_id = workqueue.enqueue_task(
       "gitsync",                      # Task name
       run_gitsync_pipeline,           # Function to execute
       subdomain=subdomain,            # For QueueTask record
       sync_subdomain=subdomain,       # Passed to pipeline
       git_user=git_user,
       git_token=git_token,
       git_repo=git_repo,
       branch=branch,
       commit_msg=commit_msg,
       source_path=source_path,
       owner=request.user,             # Optional
   )

   # Returns: task_id (integer)
   # Redirect to: /course/{course_pk}/gitsync/status/{task_id}/

GitPull (Full)
^^^^^^^^^^^^^^

.. code:: python

   import workqueue.util as workqueue
   from workqueue.tasks import run_gitpull_pipeline

   task_id = workqueue.enqueue_task(
       "gitpull",                      # Task name
       run_gitpull_pipeline,           # Function to execute
       subdomain=subdomain,            # For QueueTask record
       pull_subdomain=subdomain,       # Passed to pipeline
       git_user=git_user,              # Optional for public repos
       git_token=git_token,            # Optional for public repos
       git_repo=git_repo,
       branch=branch,
       source_path=source_path,
       owner=None,                     # Optional
   )

GitPull (Exercises Only)
^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: python

   import workqueue.util as workqueue
   from workqueue.tasks import run_gitpull_exercises_pipeline

   task_id = workqueue.enqueue_task(
       "gitpull_exercises",            # Task name
       run_gitpull_exercises_pipeline, # Function to execute
       subdomain=subdomain,            # For QueueTask record
       pull_subdomain=subdomain,       # Passed to pipeline
       git_user=git_user,
       git_token=git_token,
       git_repo=git_repo,
       branch=branch,
       source_path=source_path,
   )

Task Status Polling
~~~~~~~~~~~~~~~~~~~

Endpoint
^^^^^^^^

::

   GET /queuetask/<task_id>/

Response Format
^^^^^^^^^^^^^^^

.. code:: json

   {
     "status": "Pushing to GitHub",
     "progress": 85,
     "done": false
   }

JavaScript Polling Example
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: javascript

   function pollTaskStatus(taskId) {
       fetch(`/queuetask/${taskId}/`)
           .then(response => response.json())
           .then(data => {
               // Update UI
               document.querySelector('.progress-bar').value = data.progress;
               document.querySelector('.status-text').textContent = data.status;

               if (!data.done) {
                   setTimeout(() => pollTaskStatus(taskId), 2000);  // Poll every 2s
               } else {
                   // Task complete
                   showCompleteButton();
               }
           });
   }

GitHub API Integration
~~~~~~~~~~~~~~~~~~~~~~

Check Repository Visibility
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: python

   import requests

   resp = requests.get(
       f"https://api.github.com/repos/{git_repo}",
       headers={
           "Authorization": f"token {git_token}",
           "Accept": "application/vnd.github.v3+json",
       },
       timeout=15
   )

   repo_data = resp.json()
   is_private = repo_data.get("private", False)
   repo_size = repo_data.get("size", 0)  # In KB

Fetch Commit History
^^^^^^^^^^^^^^^^^^^^

.. code:: python

   import requests

   resp = requests.get(
       f"https://api.github.com/repos/{git_repo}/commits",
       headers={
           "Authorization": f"token {git_token}",
           "Accept": "application/vnd.github.v3+json",
       },
       params={
           "sha": branch,      # Branch name
           "per_page": 4,      # Number of commits
       },
       timeout=10
   )

   commits = resp.json()
   for commit in commits:
       hash = commit["sha"][:7]
       message = commit["commit"]["message"].split("\n")[0]
       date = commit["commit"]["committer"]["date"]

Check Branch Exists
^^^^^^^^^^^^^^^^^^^

.. code:: bash

   # Via git command (used in code)
   git ls-remote --heads origin <branch>

   # Returns: refs/heads/<branch> if exists, empty if not



Development Notes
-----------------

Adding New Excluded Directories
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To exclude additional directories from GitSync:

**Edit ``_gitsync_pipeline()`` function:**

.. code:: python

   # In rsync command
   subprocess.run([
       "rsync", "-av", "--delete",
       "--exclude=backups",
       "--exclude=xsl",
       "--exclude=csv",
       "--exclude=html",
       "--exclude=new_directory",  # Add here
       f"{source_path}/", f"{repo_path}/{subdomain}/"
   ])

   # In cleanup section
   excluded_dirs = ["backups", "xsl", "csv", "html", "new_directory"]  # Add here
   for dir_name in excluded_dirs:
       dir_path = os.path.join(repo_path, subdomain, dir_name)
       if os.path.exists(dir_path):
           shutil.rmtree(dir_path)

Changing Commit History Count
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Edit ``CourseGitSyncView()`` function, line 669:**

.. code:: python

   commits_resp = http_requests.get(
       f"https://api.github.com/repos/{git_repo}/commits",
       params={"sha": branch_val, "per_page": 10},  # Change from 4 to 10
   )

Changing Pull Sparse-Checkout Paths
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For exercises-only pull, edit ``_gitpull_exercises_pipeline()``:

.. code:: python

   sparse_file = os.path.join(git_dir, "info", "sparse-checkout")
   with open(sparse_file, "w", encoding="utf-8") as sf:
       sf.write("exercises/\n")
       sf.write("README.md\n")
       sf.write("database.conf\n")
       sf.write("new_path/\n")  # Add new path here

Adding New Pull Modes
~~~~~~~~~~~~~~~~~~~~~

To create a new selective pull mode (e.g., “config-only”):

**Step 1: Add task wrapper in ``workqueue/tasks.py``:**

.. code:: python

   def run_gitpull_config_pipeline(task, pull_subdomain, git_user, git_token, git_repo, branch, source_path, subdomain=None, **kwargs):
       from course.views.views import _gitpull_config_pipeline
       return _gitpull_config_pipeline(
           task,
           pull_subdomain=pull_subdomain,
           git_user=git_user,
           git_token=git_token,
           git_repo=git_repo,
           branch=branch,
           source_path=source_path,
       )

**Step 2: Add pipeline function in ``course/views/views.py``:**

.. code:: python

   def _gitpull_config_pipeline(task, pull_subdomain, git_user, git_token, git_repo, branch, source_path):
       # Similar structure to _gitpull_exercises_pipeline
       # But with different sparse-checkout configuration

       sparse_file = os.path.join(git_dir, "info", "sparse-checkout")
       with open(sparse_file, "w") as sf:
           sf.write("*.conf\n")
           sf.write("*.ini\n")
           sf.write("settings/\n")

       # Rest similar to exercises pipeline

**Step 3: Update ``CourseGitPullView()`` POST handler:**

.. code:: python

   pull_scope = request.POST.get("pull_scope", "full")

   if pull_scope == "config":
       from workqueue.tasks import run_gitpull_config_pipeline
       task_id = workqueue.enqueue_task(
           "gitpull_config",
           run_gitpull_config_pipeline,
           # ... kwargs
       )

**Step 4: Update ``templates/gitpull/confirm.html``:**

.. code:: html

   <input type="radio" name="pull_scope" value="full" checked>
   <label>Full Pull</label>

   <input type="radio" name="pull_scope" value="exercises">
   <label>Exercises Only</label>

   <input type="radio" name="pull_scope" value="config">
   <label>Config Only</label>

Using a Different Git Provider
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Currently hardcoded for GitHub. To support GitLab, Bitbucket, etc.:

**Step 1: Add provider field to course.data:**

.. code:: python

   course.data = {
       "GIT_PROVIDER": "gitlab",  # or "github", "bitbucket"
       "GIT_USER": "username",
       "GIT_TOKEN": "token",
       "GIT_REPO": "username/repo",
   }

**Step 2: Parameterize URLs in pipeline functions:**

.. code:: python

   provider = cdata.get("GIT_PROVIDER", "github")

   if provider == "github":
       clone_url = f"https://{git_user}:{git_token}@github.com/{git_repo}.git"
       api_url = f"https://api.github.com/repos/{git_repo}"
   elif provider == "gitlab":
       clone_url = f"https://oauth2:{git_token}@gitlab.com/{git_repo}.git"
       api_url = f"https://gitlab.com/api/v4/projects/{git_repo.replace('/', '%2F')}"

**Step 3: Adjust API calls for commit history and visibility:**

.. code:: python

   if provider == "github":
       # GitHub API calls
   elif provider == "gitlab":
       # GitLab API calls (different endpoints and response format)

Testing Locally
~~~~~~~~~~~~~~~

**Set up test environment:**

.. code:: bash

   # Create test subdomain directory
   mkdir -p /tmp/subdomain-data/test-subdomain

   # Set settings.VOLUME
   export VOLUME="/tmp/subdomain-data"

   # Create test course with git config
   # (Django shell or admin interface)

**Test GitSync:**

.. code:: bash

   # Start django-rq worker
   python manage.py rqworker default

   # Access /course/1/gitsync/ in browser
   # Monitor worker logs

**Test GitPull:**

.. code:: bash

   # Ensure test repo exists on GitHub
   # Access /course/1/gitpull/ in browser
   # Monitor worker logs and /tmp/subdomain-data/

**Check task status:**

.. code:: bash

   # Django shell
   from workqueue.models import QueueTask
   tasks = QueueTask.objects.filter(subdomain="test-subdomain")
   for t in tasks:
       print(f"{t.name}: {t.progress}% - {t.status}")



Troubleshooting for Administrators
----------------------------------

Task Queue Not Processing
~~~~~~~~~~~~~~~~~~~~~~~~~

**Symptoms**: Tasks stuck at 0%, status page doesn’t update

**Check**:

.. code:: bash

   # Is Redis running?
   redis-cli ping
   # Should return: PONG

   # Is RQ worker running?
   ps aux | grep rqworker

   # Check RQ queue status
   python manage.py rq_info

**Fix**:

.. code:: bash

   # Start Redis
   service redis start

   # Start RQ worker
   python manage.py rqworker default &

Git Clone/Fetch Failing
~~~~~~~~~~~~~~~~~~~~~~~

**Symptoms**: “git fetch failed: couldn’t find remote ref”

**Common causes**: - Branch doesn’t exist - Wrong credentials - Network
issues - Repo doesn’t exist

**Debug**:

.. code:: bash

   # Test manually
   cd /tmp
   git clone https://username:token@github.com/username/repo.git

   # Check specific branch
   git ls-remote https://github.com/username/repo.git branch-name

Database Restoration Failing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Symptoms**: “db_rename_database failed” or timeout

**Check**:

.. code:: bash

   # Does script exist?
   ls -la /path/to/backend/db_rename_database

   # Is it executable?
   chmod +x /path/to/backend/db_rename_database

   # Run manually
   /path/to/backend/db_rename_database test-subdomain

**Common issues**: - ``database.conf`` missing or malformed - Database
file doesn’t exist in pulled data - PostgreSQL connection issues -
Permissions on ``/subdomain-data/``

Sparse-Checkout Not Working
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Symptoms**: Full repo pulled even with sparse-checkout

**Debug**:

.. code:: bash

   cd /subdomain-data/test-subdomain
   git config core.sparseCheckout
   # Should return: true

   cat .git/info/sparse-checkout
   # Should list only desired paths

   git sparse-checkout list
   # Shows active sparse patterns

**Fix**:

.. code:: bash

   # Reinitialize sparse-checkout
   git sparse-checkout init
   git sparse-checkout set exercises/ README.md

GitHub API Rate Limiting
~~~~~~~~~~~~~~~~~~~~~~~~

**Symptoms**: “API rate limit exceeded”

**Check**:

.. code:: bash

   curl -H "Authorization: token $TOKEN" \
     https://api.github.com/rate_limit

**Solutions**: - Use authenticated requests (higher limit) - Cache
commit history responses - Reduce API calls (increase commit history
cache TTL)

Large Repo Timeouts
~~~~~~~~~~~~~~~~~~~

**Symptoms**: “Git operation timed out” on large repos

**Fix**: 1. Increase timeout in pipeline function:
``python    subprocess.run([...], timeout=300)  # Increase from 120``

2. Or use shallow clones more aggressively:

   .. code:: bash

      git clone --depth 1 --single-branch ...

3. Or fetch only recent commits:

   .. code:: bash

      git fetch --depth 1 ...

Deleted Directory Running Out of Space
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Symptoms**: Disk full, many backups in ``/subdomain-data/deleted/``

**Check**:

.. code:: bash

   du -sh /subdomain-data/deleted/*

**Cleanup**:

.. code:: bash

   # Delete old backups (older than 30 days)
   find /subdomain-data/deleted/ -mtime +30 -exec rm -rf {} \;

   # Or clean up specific subdomain backups
   rm -rf /subdomain-data/deleted/old-subdomain-*

**Automate cleanup**:

.. code:: bash

   # Add to cron
   0 2 * * * find /subdomain-data/deleted/ -mtime +30 -delete



Version History
---------------

February 2026 - Initial Release
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**GitSync (Push) Features:** - Push subdomain data to GitHub private
repositories - README.md editor with live markdown preview - Commit
history display (last 4 commits via GitHub API) - Auto-generated branch
names from hostname - Branch auto-creation if doesn’t exist remotely -
Excluded directories: backups/, xsl/, csv/, html/ - Automatic cleanup of
excluded dirs from repo - Database backup before each sync - rsync-based
file synchronization with –delete flag - –force-with-lease push (safe
force push) - Async processing via Django-RQ - Real-time progress
tracking (0-100%) - Status polling endpoint with 2-second refresh -
Cancel functionality - Safety flag: GIT_ALLOW_PUSH - Superuser-only
access

**GitPull (Pull) Features:** - Two modes: Full Pull and Exercises-Only
Pull - Full Pull: Complete course restoration - Moves existing data to
/subdomain-data/deleted/ - Shallow clone with –depth 1 - Database
restoration via db_rename_database - OpenTA site URL update - Session
clearing and user logout - Course key alignment for exercises -
Exercises-Only Pull: Selective update - Git sparse-checkout for
exercises/ only - Preserves database and configuration - No session
clearing - Course key alignment - Support for both public and private
repositories - Optional credentials for public repos - Safety flags:
GIT_ALLOW_PULL + mutual exclusion with PUSH - Branch naming:
{subdomain}.{servername} - GitHub API validation of repo accessibility -
Async processing with real-time status - Cancel functionality

**Shared Infrastructure:** - Template system (form, status, error,
layout pages) - Task queue management (QueueTask model) - Auto-deletion
of tasks after 20 minutes - Error handling with truncated messages (255
char limit) - Timeout handling for all subprocess calls - Comprehensive
logging - CSRF protection - Path validation and security checks

**User Interface:** - Dark blue theme (#1e3a8a) - 80% width card layout
- Responsive commit history table - Progress bar with percentage -
Auto-refreshing status page (2s interval) - Preview README functionality
- Clear warning messages for destructive operations - Radio button
selection for pull modes



Summary
-------

This Git integration provides a complete solution for OpenTA course
version control and deployment:

**For Teachers:** - Simple backup with GitSync - Easy restoration with
GitPull - Safe exercise updates without affecting students - Clear UI
with progress tracking - Safety features prevent accidents

**For Developers:** - Clean separation of concerns - Async processing
prevents blocking - Comprehensive error handling - Extensive logging for
debugging - Modular pipeline functions - Easy to extend with new
features

**Key Design Principles:** 1. **Safety First**: Mutual exclusion flags,
backups before replacement, explicit opt-in 2. **User-Friendly**: Clear
UI, real-time progress, helpful error messages 3. **Flexible**: Full or
selective sync, public or private repos 4. **Reliable**: Timeout
handling, error recovery, comprehensive logging 5. **Secure**:
Superuser-only, token security, CSRF protection, path validation

The system has been in production since February 2026 with proven
reliability for course backup and deployment workflows.



**End of Documentation**

For questions, issues, or feature requests, contact the OpenTA
development team.
