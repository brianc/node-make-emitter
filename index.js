var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

var makeEmitter = module.exports = function() {
  var Constructor = function Emitter() {
    EventEmitter.call(this);
  };
  inherits(Constructor, EventEmitter);
  return Constructor;
};
