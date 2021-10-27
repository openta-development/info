# OpenTA
These are the info pages for OpenTA, a  web-based platform for E-learning. Consists of a Python backend together with a web front end.
See [info pages on github](https://openta-development.github.io/info)

# About this project

The documentation uses [Sphinx](http://www.sphinx-doc.org/) (with recommonmark for [Markdown](https://en.wikipedia.org/wiki/Markdown) support) which can be installed within a python environment (or globally) with
```sh
pip install Sphinx recommonmark
```

To update the repository documentation in ```/docs```
```
make html
```

For live editing the documentation install `sphinx-autobuild` with
```sh
pip install sphinx-autobuild
```

and run

```sh
sphinx-autobuild source docs/html
```

This will set up an local webserver at http://127.0.0.1:8000 that recompiles on file changes.

Maybe you are using Vim and also want to specify a port:
```sh
sphinx-autobuild --port 8080 --ignore "*.swp" --ignore "*.swx" --ignore "*~" source docs/html
```
