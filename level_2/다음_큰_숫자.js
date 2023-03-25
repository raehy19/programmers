// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function getBitCount(num) {
  if (num === 1) return 1;
  if (num === 0) return 0;
  if (num % 2) return 1 + getBitCount(Math.floor(num / 2));
  return getBitCount(Math.floor(num / 2));
}

function solution(n) {
  const bit = getBitCount(n);
  for (let i = n + 1; true; ++i) {
    if (bit === getBitCount(i)) return i;
  }
}
