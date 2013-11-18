TESTS=test/*.js

all: test

datasets:
	git submodule update --init

lib/dataset.js: datasets
	node scripts/dataset_yaml2js.js
	sync; sync; sync

release/woothee.js: lib/*.js
	mkdir release || ls -d release
	node scripts/jsbuilder.js

test: lib/dataset.js build
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--slow 20 \
		$(TESTS)

build: release/woothee.js

.PHONY: datasets test
