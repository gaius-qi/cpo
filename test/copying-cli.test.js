'use strict';

const assert = require('assert');
const copy = require('../lib/copy');

describe('test', () => {
  it('should be ok', () => {
    assert.equal(copy('pwd'), undefined);
  });
  it('should be empty', () => {
    assert.equal(copy(''), undefined);
  });
});

