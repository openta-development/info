.. include:: /global.rst

Running OpenTA locally - (NOT READY)
====================================

Make sure you communicate with a web server
-------------------------------------------

    - sudo apt install nginx nginx-common nginx-core
    - make sure you can server port 8000 on a web server
        - create a small file index.html
        - start a python web server in the same directory
                - ``python3 -m http.server 8000``
        - make sure you see the file at localhost:8000

Make sure you can serve a django instance
----------------------------------------------
    - ``mkdir django ; cd django``
    - ``sudo apt install python3 python3-venv python3-pip -y``
    - ``python3 -m venv env``
    - ``source env/bin/activate``
    - ``pip install django``
    - ``django-admin startproject mysite .``
    - ``python manage.py runserver``
        - Check http://localhost:8000


Clone the openta repo
======================

Install necessary tools on your linux box
-----------------------------------------
ssh -L 8000:localhost:8000
    - Note the povray installation and texlive installation is optional;

.. code-block::

    # install  core packages ; povray and texlive is optional

    sudo apt-get update ;
    sudo apt-get --fix-broken install graphviz libldap2-dev libcairo2 libcairo2-dev \
        libgraphviz-dev libjpeg-dev  libxml2-dev  libxslt1-dev  libzmq3-dev  memcached  \
        libmemcached-dev  vim rsync apt-utils redis libnss3 poppler-utils \
        uuid bc texlive-latex-base texlive-fonts-recommended texlive-fonts-extra \
        texlive-latex-extra povray povray-includes cron
    sudo apt-get update

    # install postgres14

    curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor \
        | tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null
    sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ bullseye-pgdg main"  \
        > /etc/apt/sources.list.d/postgresql.list'
    sudo apt update
    sudo apt upgrade -y
    sudo apt install postgresql-14ssh -L 8000:localhost:8000
    sudo apt install postgresql-client-common
    sudo systemctl enable postgresql
    sudo -u postgres createdb opentadefault1

    # install chromedriver if you want to do runtests
    sudo apt install -y chromium-browser

    # if you are not running locally 

    sudo apt install chromium-browser
    sudo apt install -y xvfb

- Check
        - ``psql --version``
        - ``systemctl status postgresql``

- make sure your allow login with the postgres user and password  [ often postgres postgres ]
- make sure postgres can access that database


Build the frontend  (or use CDN - see below)
--------------------------------------------

    - ``git clone https://github.com/opentaproject/openta-public.git  openta``
    - ``cd openta/frontend``
    - ``npm install --force``
        - if npm is missing:  ``sudo apt install npm`` 
    - ``npm run build``

Build the backend 
------------------

    -  **Important: use python3.11**
    - ``sudo mkdir -p /subdomain-data/CACHE; sudo chmod -R  a+w /subdomain-data;``
    - ``cd; cd openta/openta/django/``
    - ``python3.11 -m venv env``
    - ``source env/bin/activate``
    - ``pip install --upgrade pip``
    - ``pip install -r requirements.txt``
    - ``pip install -r requirements_dev.txt``

Set important enviromental variables
--------------------------------------------------

    - ``export SUPERUSER=super ### EXAMPLE``
    - ``export SUPEURSER_PASSWORD=superuser-password ### EXAMPLE``
    - ``export PGPASSWORD=postgres``
    - ``export PGUSER=postgres``
    - ``export DJANGO_RAGAMUFFIN_DB=rsaasdfsdsf39``



Start the webserver
-------------------

    - ``cd ; cd openta/openta/django/backend``
    - ``export DJANGO_RAGAMUFFIN_DB=rsaasdfsdsf39``
    - ``sudo -u postgres createdb opentadefault1``
    - ``python manage.py migrate``
    - ``python manage.py createcachetable``
    - ``mkdir static``
    - get frontend working : two alternatives
        - ``./frontend-update``  or
        - ``STATIC_URL='https://storage.googleapis.com/opentaproject-cdn-bucket/latest/deploystatic/'``
    - ``python manage.py runserver 127.0.0.1:8000``
    - if you are installing on another machine try ssh tunnel
        - ``ssh -L 8000:localhost:8000 user@remote``
                - You may have to place **course.remote** in **/etc/hosts**
                - ``http://chat1.localhost:8000/login/``
                - ssh -L 8000:localhost:8000 ostlund@ |host|



Test the webserver
------------------

    - make sure chromedriver is installed
    - make sure chromium-browswer is installed or
    - either X11 has to be installed or xvfb
    - either the commant ``pytest`` or the command ``xvfb-run -a pytest``
        
