function fibs(num) {
  let array = [];

  let firstNumber = 0;
  let secondNumber = 1;
  for (let i = 0; i < num; i++) {
    array.push(firstNumber);

    let a = firstNumber;
    firstNumber = secondNumber;
    secondNumber = a + secondNumber;
  }

  return array;
}

console.log(fibs(8));

function fibRec(n, sequence = [0, 1]) {
  if (n <= 2) {
    return sequence;
  }
  const i = sequence.length;
  const number = sequence[i - 2] + sequence[i - 1];
  sequence.push(number);

  return fibRec(n - 1, sequence);
}

console.log(fibRec(8));
