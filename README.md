# duo-architecture

WIP

## Quickstart guide

###Build

This project is using a simple Makefile as a task runner.  
In terminal, from the root of the app run:

##### build in a development environment

```
$ make dev
```

##### build in a production environment

```
$ make build
```

###Run a server

In another tab in Terminal, run a server and visit: [http://localhost:8100](http://localhost:8100)

```
$ ruby -run -e httpd . -p 8100
```


###Watch

The Makefile does not include a _Watch_ task, however you can add one yourself using [watch(1)](https://github.com/tj/watch).

> watch(1) periodically executes the given command - useful for auto-testing, auto-building, auto-anything

```
$ brew install watch
```

_Have you installed OS X 10.10 Yosemite and Homebrew is broken? Read this: http://jcvangent.com/fixing-homebrew-os-x-10-10-yosemite/_

##### Usage

```
$ watch make dev
```

# Testing

Run tests via PhantomJS.

```
$ make test
```

```
$ make test-phantomjs
```

Run tests via the browser.

```
$ make test-browser
```
