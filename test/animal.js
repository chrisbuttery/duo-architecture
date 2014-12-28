var assert = require('component/assert');
var Animal = require('../lib/animal');

describe('animal', function(){

  var magpie;

  beforeEach(function(){
    magpie = new Animal('Australian', 'Magpie');
  })
  // test the constructor
  it('should set initial properties', function(){
    assert(magpie.firstName === 'Australian')
    assert(magpie.lastName === 'Magpie');
  });

  it('should return a string when calling sayHi()', function(){
    var str = magpie.sayHi();
    assert(str === "I am an animal");
  });

  it('should return a string when calling sayOther()', function(){
    var str = magpie.sayOther();
    assert(str === "Wat?!!!");
  });
})
