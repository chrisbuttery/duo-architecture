"use strict";

const Animal = require('../lib/animal');
const assert = require('component/assert@0.5.0');

describe('animal', function(){
  var magpie;

  beforeEach(function(){
    magpie = new Animal('Australian', 'Magpie');
  })


  it('should set initial properties', function(){
    assert(magpie.firstName === 'Australian');
    assert(magpie.lastName === 'Magpie');
  });

  it('should return a string when calling sayHi()', function(){
    let str = magpie.sayHi();
    assert(str === 'I am an animal');
  });

  it('should return a string when calling sayOther()', function(){
    let str = magpie.sayOther();
    assert(str === 'Wat?!!!');
  });
})
