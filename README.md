# make-emitter

An event emitter constructor factory.  Save ~3 lines of code with each use!

## api

### <em>function</em> makeEmitter([<em>object</em> methods])

`require('make-emitter')` returns the function `makeEmitter`

The function `make-emitter` returns a constructor function for a new object which inherits 
from EventEmitter.  Optionall you can supply a hash of methods which will be added to the prototype of
the new Constructor.

## example - old and busted:

```js
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var CustomEmitter = function() {
  EventEmitter.call(this);
};

util.inherits(CustomEmitter, EventEmitter);

CustomEmitter.prototype.explode = function() {
  this.emit('boom');
};
```

## example - with make-emitter;
```js
var emitter = require('make-emitter');
var CustomEmitter = emitter({
  explode: function() {
    this.emit('boom');
  }
});
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
