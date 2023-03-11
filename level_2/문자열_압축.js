// https://school.programmers.co.kr/learn/courses/30/lessons/60057

function compress(n, str) {
  let result = '';

  while (str.length > 0) {
    let count = 1;
    let part = str.slice(0, n);
    str = str.slice(n);

    while (str.indexOf(part) === 0) {
      str = str.slice(n);
      ++count;
    }

    if (count > 1) result = result + count;
    result = result + part;
  }
  return result.length;
}

function solution(s) {
  let min = s.length;
  for (let i = 1; i < s.length / 2 + 1; ++i) {
    min = Math.min(min, compress(i, s));
  }

  return min;
}
