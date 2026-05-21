export function theuconEncrypt(text) {
  return theuconScrambleArray(text.split(''), isPrime).join('');
}

export function theuconDecrypt(text) {
  return theuconUnscrambleArray(text.split(''), isPrime).join('');
}

export function theuconEncryptPreserveSpaces(text) {
  return preserveSpaces(text, theuconScrambleArray, isPrime);
}

export function theuconDecryptPreserveSpaces(text) {
  return preserveSpaces(text, theuconUnscrambleArray, isPrime);
}

export function fibonacciEncrypt(text) {
  return theuconScrambleArray(text.split(''), isFib).join('');
}

export function fibonacciDecrypt(text) {
  return theuconUnscrambleArray(text.split(''), isFib).join('');
}

export function fibonacciEncryptPreserveSpaces(text) {
  return preserveSpaces(text, theuconScrambleArray, isFib);
}

export function fibonacciDecryptPreserveSpaces(text) {
  return preserveSpaces(text, theuconUnscrambleArray, isFib);
}

function preserveSpaces(text, scrambler, isInSequence) {
  const textArray = text.split('');
  const spaceless = text.replace(/[\s]/g, '');
  let spacelessArray = spaceless.split('');
  let characters = scrambler(spacelessArray, isInSequence);

  return textArray.map((c) => (/\s/.test(c) ? c : characters.shift())).join('');
}

function isPrime(n: number): boolean {
  if (n < 2 || (n % 2 === 0 && n > 2)) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function isFib(n: number): boolean {
  if (n < 0) return false;
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function isPerfectSquare(n: number): boolean {
  const s = Math.round(Math.sqrt(n));
  return s * s === n;
}

function sequenceUntil(n: number, isInSequence): number[] {
  return Array.from({ length: n - 1 }, (_, i) => i + 1).filter(isInSequence);
}

function theuconScrambleArray(remaining, isInSequence) {
  let output = [];
  while (remaining.length > 0) {
    let primeIndexed = [];
    remaining = remaining.filter((r, i) => {
      let accepted = i === 0 || isInSequence(i);
      if (accepted) {
        primeIndexed.push(r);
      }
      return !accepted;
    });
    output = output.concat(primeIndexed);
  }
  return output;
}

function theuconUnscrambleArray(remaining, isInSequence) {
  let output = [];
  while (remaining.length) {
    const primes = [0, ...sequenceUntil(remaining.length, isInSequence)];
    const currentOutput: string[] = Array(remaining.length).fill('');
    const current = remaining.splice(0, primes.length);

    primes.forEach((p, i) => {
      currentOutput[p] = current[i];
    });

    if (output.length === 0) {
      output = currentOutput;
    } else {
      output = output.map((o) => (o === '' ? currentOutput.shift() : o));
    }
  }
  return output;
}
