// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => a - b);
  while (people.length) {
    if (people.at(-1) + people.at(0) > limit) {
      people.pop();
    } else {
      people.pop();
      people.shift();
    }
    ++answer;
  }
  return answer;
}
