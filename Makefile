# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
# Prefer project venv's sphinx-build if available, else fallback
SPHINXBUILD   := $(if $(wildcard env/bin/sphinx-build),env/bin/sphinx-build,sphinx-build)
SPHINXAUTOBUILD := $(if $(wildcard env/bin/sphinx-autobuild),env/bin/sphinx-autobuild,sphinx-autobuild)
SPHINXPROJ    = OpenTA
SOURCEDIR     = source
BUILDDIR      = docs
PORT          = 8080
HOST          = 127.0.0.1

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile clean

# override clean recipe - the $(BUILDDIR)/index.html and $(BUILDDIR)/.nojekyll files are needed for
# GitHub pages to work correctly.
clean:
	find $(BUILDDIR) -type f -not \( -name index.html -or -name .nojekyll \) -delete
	rm -rf $(BUILDDIR)/doctrees $(BUILDDIR)/html

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: autobuild serve

# Live-reload docs server
autobuild:
	@$(SPHINXAUTOBUILD) -b html "$(SOURCEDIR)" "$(BUILDDIR)/html" --port $(PORT) --host $(HOST)

# Alias for autobuild
serve: autobuild
