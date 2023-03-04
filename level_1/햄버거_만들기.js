// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  const stack = [];
  let answer = 0;

  for (const ingredientElement of ingredient) {
    stack.push(ingredientElement);
    if (
      stack.length > 3 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      for (let i = 0; i < 4; i++) {
        stack.pop();
      }
      answer += 1;
    }
  }
  return answer;
}
