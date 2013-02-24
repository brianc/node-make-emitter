# make-emitter

An event emitter constructor factory.  Save ~3 lines of code with each use!

## example - old and busted:

```js
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var CustomEmitter = function() {
  EventEmitter.call(this);
};

util.inherits(CustomEmitter, EventEmitter);
```

## example - with make-emitter;
```js
var emitter = require('make-emitter');
var CustomEmitter = emitter();
```

incredible.

## install
```
npm install make-emitter
```

## test
```
npm test
```

## license
MIT
