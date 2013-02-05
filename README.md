# ga-browserify

<!-- [![build status][1]][2] [![dependency status][3]][4]

[![browser support][5]][6] -->

Browserify compliant version of google analytics

## Example

```js
var ga = require("ga-browserify")
var tracker = ga("UA-XXX")
tracker._trackPageview()
tracker._trackEvent(...)
```

## Installation

`npm install ga-browserify`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/ga-browserify.png
  [2]: http://travis-ci.org/Colingo/ga-browserify
  [3]: http://david-dm.org/Colingo/ga-browserify/status.png
  [4]: http://david-dm.org/Colingo/ga-browserify
  [5]: http://ci.testling.com/Colingo/ga-browserify.png
  [6]: http://ci.testling.com/Colingo/ga-browserify
