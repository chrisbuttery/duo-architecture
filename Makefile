D = ./node_modules/.bin/duo
T = ./node_modules/.bin/duo-test
TESTFILE = build/tests.js
TESTS = $(filter-out test/tests.js, $(wildcard test/*.js))
SRC = $(wildcard ./lib/boot/index.js lib/**/*.js)

# clean directories and start fresh
clean:
	rm -rf tests/tests.js build/tests.js build/build.js build/build.css components

# build the app for production
build:
	@echo 'Production: building...'
	@NODE_ENV=production node app.js

# build the app for development
dev:
	@echo 'Development: building...'
	@NODE_ENV=development node app.js

# Build the tests
# duo -u duo-jsx --root . --type js < test/tests.js > build/tests.js
$(TESTFILE): test/tests.js
	@$(D) -u duo-jsx --root . --type js < $< > $@

# generate a test/tests.js file for duo to reference
test/tests.js: $(SRC) $(TESTS)
	@echo '// GENERATED FILE: DO NOT EDIT!' > $@
	@$(foreach test, $(TESTS), echo 'require("./$(test)");' >> $@;)

# run tests in phantomJS
test: test-phantomjs

test-phantomjs: $(TESTFILE)
	@$(T) phantomjs --build build/tests.js --reporter spec

# run tests in the browser
test-browser: $(TESTFILE)
	@$(T) browser --build build/tests.js

.PHONY: all clean test test-phantomjs test-browser build dev
