// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let layer = [x];
  while (layer.length) {
    const nextLayer = [];
    for (const num of layer) {
      for (const nextNum of [num + n, num * 2, num * 3]) {
        if (nextNum > y || dp[nextNum]) continue;
        if (nextNum === y) return dp[num] + 1;
        dp[nextNum] = dp[num] + 1;
        nextLayer.push(nextNum);
      }
    }
    layer = nextLayer;
  }
  return -1;
}
