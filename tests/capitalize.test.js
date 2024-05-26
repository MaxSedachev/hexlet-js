import { capitalize } from '../src/capitalize.js';
import {strict as assert} from 'node:assert';

assert.equal(capitalize('hello'), 'Hello');
// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

assert.equal(capitalize(''), '');
// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// Варианты с assert:

// assert.notStrictEqual(capitalize(1234), 1234)
// assert.notStrictEqual(capitalize(null), null)

// Варианты с if:

// if (capitalize(1234) !== 1234) {
//     throw new Error('Функция работает неверно!');
//   }
// if (capitalize(null) !== null) {
//     throw new Error('Функция работает неверно!');
//   }

console.log('Все тесты пройдены!');