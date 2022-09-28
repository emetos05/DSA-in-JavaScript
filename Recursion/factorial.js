function findFactorialRecursive(number) {
  if (number === 0) return 1;
  answer = number * findFactorialRecursive(number - 1);
  return answer;
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 1; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

// 5! = 5*4*3*2*1
console.log(findFactorialIterative(3));
console.log(findFactorialRecursive(5));
