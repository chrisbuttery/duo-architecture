var assert = require('component/assert');
var subtract = require('../lib/subtract');

describe('subtract', function() {
 it('should subtract 4 - 2 to equal 2', function() {
   assert.equal(subtract(4, 2), 2);
 });
});
