var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

var makeEmitter = module.exports = function(other) {
  var Constructor = function Emitter() {
    EventEmitter.call(this);
  };
  inherits(Constructor, EventEmitter);
  if('object' == typeof other) {
    for(var key in other) {
      Constructor.prototype[key] = other[key];
    }
  }
  return Constructor;
};
