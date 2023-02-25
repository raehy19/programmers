// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function divisorCal(n) {
  let cnt = 0;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      cnt += 1;
    } else if (n % i === 0) {
      cnt += 2;
    }
  }
  return cnt;
}

function solution(number, limit, power) {
  let totalSteel = 0;

  for (let i = 1; i < number + 1; i++) {
    const wp = divisorCal(i);
    wp > limit ? (totalSteel += power) : (totalSteel += wp);
  }
  return totalSteel;
}
