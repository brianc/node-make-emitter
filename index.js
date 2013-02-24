var EventEmitter = require('events').EventEmitter;
var util = require('util');

var makeEmitter = module.exports = function() {
  var Constructor = function Emitter() {
    EventEmitter.call(this);
  };
  util.inherits(Constructor, EventEmitter);
  return Constructor;
};
