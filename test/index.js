var assert = require('assert');
var EventEmitter = require('events').EventEmitter;

var makeEmitter = require(__dirname + '/..');

describe('make-emitter', function() {
  it('returns a constructor', function() {
    assert.equal('function', typeof makeEmitter());
  });

  it('makes an event emitter from nothing', function() {
    var Thing = makeEmitter();
    var thing = new Thing();
    assert(thing instanceof Thing);
    assert(thing instanceof EventEmitter);
    assert.equal('function', typeof thing.emit);
  });
});
