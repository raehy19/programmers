// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  let answer;
  const [x_arr, y_arr] = [X.split('').sort(), Y.split('').sort()];
  const numSet = [];

  let [i, j] = [x_arr.length, y_arr.length];
  while (i > -1 && j > -1) {
    if (x_arr[i] === y_arr[j]) {
      numSet.push(x_arr[i]);
      --i;
      --j;
    } else if (x_arr[i] > y_arr[j]) {
      --i;
    } else {
      --j;
    }
  }

  numSet.sort((a, b) => b - a);
  answer = numSet.join('');
  if (answer.length === 0) return '-1';
  if (answer[0] === '0') return '0';
  return answer;
}
