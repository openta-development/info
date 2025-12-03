.. include:: /global.rst

************
Running OpenTA locally
************

Make sure you communicate with a web server
___________________________________________

    - sudo apt install nginx nginx-common nginx-core
    - make sure you can server port 8000 on a web server
        - create a small file index.html
        - start a python web server in the same directory
                - ``python3 -m http.server 8000``
        - make sure you see the file at localhost:8000

Make sure you can serve a django instance
___________________
    - ``mkdir django ; cd django``
    - ``sudo apt install python3 python3-venv python3-pip -y``
    - ``python3 -m venv env``
    - ``source env/bin/activate``
    - ``pip install django``
    - ``django-admin startproject mysite .``
    - ``python manage.py runserver``
        - Check http://localhost:8000



