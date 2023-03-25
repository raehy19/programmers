// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;
  let sum = 0;

  // i개의 연속한 수를 더해 n을 만들 수 있는지 확인
  for (let i = 1; sum < n; ++i) {
    // i가 홀수인 경우, n이 i로 나누어떨어지면 i개의 연속한 수로 표현 가능
    if (i % 2) {
      if (n % i === 0) ++answer;
    }
    // i가 짝수인 경우, n이 i의 배수 + i/2인 경우 i개의 연속한 수로 표현 가능
    //  ..., (n/i)-(i/2)-1, (n/i)-(i/2), (n/i)+(i/2), (n/i)+(i/2) + 1, ...
    // n/i + i/2 가 정수여야 함
    else {
      if (n % i === i / 2) ++answer;
    }
    sum += i;
  }
  return answer;
}
