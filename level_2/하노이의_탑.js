// https://school.programmers.co.kr/learn/courses/30/lessons/12946

function solution(n) {
  const answer = [];

  function hanoi(n, start, temp, dest) {
    if (n === 1) answer.push([start, dest]);
    else {
      hanoi(n - 1, start, dest, temp);
      answer.push([start, dest]);
      hanoi(n - 1, temp, start, dest);
    }
  }
  hanoi(n, 1, 2, 3);
  return answer;
}
