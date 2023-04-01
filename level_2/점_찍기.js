// https://school.programmers.co.kr/learn/courses/30/lessons/140107

function solution(k, d) {
  const a = Math.floor(d / k);
  let b = 0;
  for (let i = 1; i < a + 1; ++i) {
    b += Math.floor(Math.sqrt(d ** 2 - (i * k) ** 2) / k);
  }
  return 1 + a * 2 + b;
}
