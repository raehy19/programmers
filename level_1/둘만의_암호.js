// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  const charSet = [];
  let answer = '';

  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    charSet.push(String.fromCharCode(i));
  }
  for (const skipElement of skip) {
    charSet.splice(charSet.indexOf(skipElement), 1);
  }
  for (const sElement of s) {
    answer += charSet[(charSet.indexOf(sElement) + index) % charSet.length];
  }
  return answer;
}
