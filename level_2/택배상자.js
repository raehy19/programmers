// https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(order) {
  const stack = [];
  let answer = 0;
  let orderIdx = 0;
  function check_stack() {
    if (stack.length && order.length && stack.at(-1) === order[orderIdx]) {
      ++answer;
      stack.pop();
      ++orderIdx;
      check_stack();
    }
  }

  for (let i = 1; true; ++i) {
    if (order.length - 1 === orderIdx) break;
    else if (i === order[orderIdx]) {
      ++answer;
      ++orderIdx;
      check_stack();
    } else if (i < order[orderIdx]) {
      stack.push(i);
    } else break;
  }
  return answer;
}
