# generator-harp-browserify [![Build Status](https://secure.travis-ci.org/chris-l/generator-harp-browserify.png?branch=master)](https://travis-ci.org/chris-l/generator-harp-browserify)

> [Yeoman](http://yeoman.io) generator

Generator for creating static sites based on [Harp](http://harpjs.com) that have [Browserify](http://browserify.org) included.

It uses [grunt](http://gruntjs.com) as the task runner. It also allows to use [jslint](http://www.jslint.com) or [jshint](http://jshint.com).

## Nested Layouts

Read about [nested layouts](http://harpjs.com/docs/development/layout#nested-layout) on the harp site.

Resumed, the problem is that by default, you have a `_layout` per directory, and on that file, you have to include the `<head>`, `doctype`, etc and also, the basic design of that route.

Using nested layouts, you can have a "base layout" with the `doctype`, `<head>`, etc. and then a "sublayout" that contains specific details of the route directory.

This generator already includes code to have nested layouts, called here **sublayouts**.

By default, you have a `_layout.jade` (which is based on [html5-boilerplate](https://html5boilerplate.com/)).

That `_layout.jade` will look for a `_sublayout.jade` file on the current directory.

That way, you only need to create a `_sublayout.jade` file per directory, with the specific details of that directory and every request will reuse the default `_layout.jade`!

That way is even more DRY.

## Getting Started

### Yeoman Generators

To install generator-harp-browserify from npm, run:

```
$ npm install -g generator-harp-browserify
```

Finally, initiate the generator:

```
$ yo harp-browserify
```

## License

MIT
