"use strict";

const falsey = require('../lib/falsey');
const assert = require('component/assert@0.5.0');

describe('falsey', function(){
  it('should return false', function(){
    assert(false == falsey());
  })
})
