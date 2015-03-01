TESTFILE = build/tests.js
T = ./node_modules/.bin/duo-test
D = ./node_modules/.bin/duo
TESTS = $(filter-out test/tests.js, $(wildcard test/*.js))
SRC = $(wildcard ./lib/boot/index.js lib/**/*.js)

# clean directories and start fresh

clean:
	@rm -rf tests/tests.js build/tests.js build/build.js build/build.css components
	@echo 'Clean: tests/tests.js build/tests.js build/build.js build/build.css components'
# build the app for production
build:
	@echo 'Production: building...'
	@ENV=production node --harmony app.js

# build the app for development

dev:
	@echo 'Development: building...'
	@ENV=development node --harmony app.js

# Build the tests

$(TESTFILE): test/tests.js
	@echo 'Tests: building...'
	@$(D) --use duo-babel --root . --type js < $< > $@

# generate a test/tests.js file for duo to reference

test/tests.js: $(SRC) $(TESTS)
	@echo '// GENERATED FILE: DO NOT EDIT!' > $@
	@$(foreach test, $(TESTS), echo 'require("./$(test)");' >> $@;)

# run tests in phantomJS

test: test-phantomjs

test-phantomjs: $(TESTFILE)
	@$(T) phantomjs --build build/tests.js --reporter spec

# run tests in the browser (defaults to safari)

test-browser: $(TESTFILE)
	@$(T) browser safari --build build/tests.js

.PHONY: all clean test test-phantomjs test-browser build dev
