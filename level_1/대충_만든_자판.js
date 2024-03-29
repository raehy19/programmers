// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  const answer = [];

  for (const target of targets) {
    let clickCountSum = 0;
    for (const targetElement of target) {
      const clickCounts = [];
      for (const keymapElement of keymap) {
        const clickCount = keymapElement.indexOf(targetElement);
        if (clickCount > -1) clickCounts.push(clickCount + 1);
      }
      if (clickCounts.length === 0) {
        clickCountSum = -1;
        break;
      }
      clickCountSum += Math.min(...clickCounts);
    }
    answer.push(clickCountSum);
  }
  return answer;
}
