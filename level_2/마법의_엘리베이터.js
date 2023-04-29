// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  let answer = 0;
  const num = storey
    .toString()
    .split('')
    .map((e) => parseInt(e));
  for (let i = num.length - 1; i > -1; --i) {
    if (i === 0) {
      if (num[i] === 10) {
        answer += 1;
      } else if (num[i] < 6) {
        answer += num[i];
      } else {
        answer += 11 - num[i];
      }
    } else if (num[i] < 5) {
      answer += num[i];
    } else if (num[i] === 5) {
      if (num[i - 1] < 5) {
        answer += num[i];
      } else {
        num[i - 1] += 1;
        answer += 5;
      }
    } else if (num[i] === 10) {
      num[i - 1] += 1;
    } else {
      answer += 10 - num[i];
      num[i - 1] += 1;
    }
  }
  return answer;
}
