// 최댓값_만들기(1)

function solution(numbers) {
  var answer = 0;
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
