// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;
  let i = 0;
  while (i < s.length) {
    let count = [1, 0]; // 첫글자, 나머지
    let first = s.charAt(i);
    ++i;
    while (count[0] !== count[1] && i < s.length) {
      if (s.charAt(i) === first) ++count[0];
      else ++count[1];
      ++i;
    }
    ++answer;
  }
  return answer;
}
