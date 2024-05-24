import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

// if (capitalize(1234) !== 1234) {
//     throw new Error('Функция работает неверно!');
//   }

// if (capitalize(null) !== null) {
//     throw new Error('Функция работает неверно!');
//   }

if (capitalize('hello') !== 'hello') {
    throw new Error('Функция работает неверно!');
  }

console.log('Все тесты пройдены!');