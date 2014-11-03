
var assert = require('component/assert');
var falsey = require('../lib/falsey');

describe('falsey', function(){
  it('should return false', function(){
    assert(false == falsey());
  })
})
