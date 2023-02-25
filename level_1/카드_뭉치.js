// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  while (goal.length) {
    if (goal[0] === cards1[0]) {
      cards1.shift();
      goal.shift();
    } else if (goal[0] === cards2[0]) {
      cards2.shift();
      goal.shift();
    } else return "No";
  }
  return "Yes";
}
