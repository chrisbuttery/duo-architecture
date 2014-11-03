
var assert = require('component/assert');
var hello = require('../lib/hello');

describe('library.hello()', function(){
  it('should say hello', function(){
    assert('hello there world' == hello('there', 'world'))
  })
})
