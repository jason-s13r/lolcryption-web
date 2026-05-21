import {
  fibonacciDecrypt,
  fibonacciDecryptPreserveSpaces,
  fibonacciEncrypt,
  fibonacciEncryptPreserveSpaces,
  theuconDecrypt,
  theuconDecryptPreserveSpaces,
  theuconEncrypt,
  theuconEncryptPreserveSpaces,
} from './theucon';
import {
  decodeKeyboardShift,
  delolcrypt,
  encodeKeyboardShift,
  enlolcrypt,
  rot13,
} from './lolcryption';

export const encodingAlgorithms = {
  lolcryption: {
    id: 'lolcryption',
    label: 'LOLcryption',
    encode: (text) => enlolcrypt(text),
    decode: (text) => delolcrypt(text),
  },
  rot13: {
    id: 'rot13',
    label: 'ROT 13',
    symmetric: true,
    encode: (text) => rot13(text),
    decode: (text) => rot13(text),
  },
  keyboardShift: {
    id: 'keyboardShift',
    label: 'Keyboard Shift',
    encode: (text) => encodeKeyboardShift(text),
    decode: (text) => decodeKeyboardShift(text),
  },
  theucon: {
    id: 'theucon',
    label: 'Theucon Prime',
    encode: (text) => theuconEncrypt(text),
    decode: (text) => theuconDecrypt(text),
  },
  theuconPreserved: {
    id: 'theuconPreserved',
    label: 'Theucon Prime (preserve whitespace)',
    encode: (text) => theuconEncryptPreserveSpaces(text),
    decode: (text) => theuconDecryptPreserveSpaces(text),
  },
  theuconFibonacci: {
    id: 'theuconFibonacci',
    label: 'Theucon Fibonacci',
    encode: (text) => fibonacciEncrypt(text),
    decode: (text) => fibonacciDecrypt(text),
  },
  theuconFibonacciPreserved: {
    id: 'theuconFibonacciPreserved',
    label: 'Theucon Fibonacci (preserve whitespace)',
    encode: (text) => fibonacciEncryptPreserveSpaces(text),
    decode: (text) => fibonacciDecryptPreserveSpaces(text),
  },
  base64: {
    id: 'base64',
    label: 'Base64',
    encode: (text) => btoa(text),
    decode: (text) => aotb(text),
  },
};
