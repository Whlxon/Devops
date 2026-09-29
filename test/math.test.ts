import { test, expect } from '@jest/globals';
import { add } from '../src/util/math';

test('addition de 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});