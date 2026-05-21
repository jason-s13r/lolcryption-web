export function trNatural(text, inAlphabet, outAlphabet) {
  return text.replace(new RegExp(`([${inAlphabet}])`, 'g'), function (value) {
    var index = inAlphabet.indexOf(value);
    return outAlphabet[index] || value;
  });
}

export function tr(text, inAlphabet, outAlphabet) {
  return trNatural(
    text,
    inAlphabet + inAlphabet.toUpperCase(),
    outAlphabet + outAlphabet.toUpperCase()
  );
}

export const enlolcrypt = (text) =>
  tr(text, 'aeioubcdfghjklmnpqrstvwxyz', 'iouaenpqrstvwxyzbcdfghjklm');

export const delolcrypt = (text) =>
  tr(text, 'iouaenpqrstvwxyzbcdfghjklm', 'aeioubcdfghjklmnpqrstvwxyz');
export const rot13 = (text) =>
  tr(text, 'abcdefghijklmnopqrstuvwxyz', 'nopqrstuvwxyzabcdefghijklm');

export const encodeKeyboardShift = (text) =>
  tr(
    text,
    "1234567890-=qwertyuiopasdfghjkl;'zxcvbnm,./",
    "/1234567890-=qwertyuiopasdfghjkl;'zxcvbnm,."
  );

export const decodeKeyboardShift = (text) =>
  tr(
    text,
    "/1234567890-=qwertyuiopasdfghjkl;'zxcvbnm,.",
    "1234567890-=qwertyuiopasdfghjkl;'zxcvbnm,./"
  );
