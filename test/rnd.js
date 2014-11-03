
var assert = require('component/assert');
var rnd = require('../lib/rnd');

describe('rnd', function(){
  it('should return a number', function(){
    assert('number' == typeof rnd());
  })
});
