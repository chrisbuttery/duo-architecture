"use strict";

const sum = require('../lib/sum');
const assert = require('component/assert@0.5.0');

describe('sum', function() {
 it('should adds 1 + 2 to equal 3', function() {
   assert(sum(1, 2) === 3);
 });
});
