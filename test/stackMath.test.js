import test from 'node:test'
import assert from 'node:assert/strict'
import { getNextStackIndex } from '../src/components/stackMath.js'

test('moves one card forward for each downward wheel gesture', () => {
  assert.equal(getNextStackIndex(0, 1, 3), 1)
  assert.equal(getNextStackIndex(1, 1, 3), 2)
})

test('does not trap scrolling after the final card', () => {
  assert.equal(getNextStackIndex(2, 1, 3), null)
})

test('moves one card backward for each upward wheel gesture', () => {
  assert.equal(getNextStackIndex(2, -1, 3), 1)
  assert.equal(getNextStackIndex(0, -1, 3), null)
})
