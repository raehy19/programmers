// https://school.programmers.co.kr/learn/courses/30/lessons/154538

class node {
  value;
  depth;
  constructor(value, depth, n, y, answerDepthList) {
    this.value = value;
    this.depth = depth;
    if (this.value === y) {
      if (answerDepthList.length === 0 || answerDepthList[0] > this.depth)
        answerDepthList.push(this.depth);
    }
  }

  addChild(y, n, nodelist, answerDepthList) {
    if (this.value * 3 <= y)
      nodelist.push(
        new node(this.value * 3, this.depth + 1, n, y, answerDepthList)
      );
    if (this.value * 2 <= y)
      nodelist.push(
        new node(this.value * 2, this.depth + 1, n, y, answerDepthList)
      );
    if (this.value + n <= y)
      nodelist.push(
        new node(this.value + n, this.depth + 1, n, y, answerDepthList)
      );
  }
}

function solution(x, y, n) {
  if (x === y) return 0;
  const nodelist = [];
  const answerDepthList = [];
  nodelist.push(new node(x, 0, n, y, answerDepthList));
  for (let i = 0; i < nodelist.length; ++i) {
    if (
      answerDepthList.length !== 0 &&
      answerDepthList[0] < nodelist[i].depth + 2
    )
      continue;
    nodelist[i].addChild(y, n, nodelist, answerDepthList);
  }
  // console.log(answerDepthList);
  // console.log(nodelist);
  if (answerDepthList.length === 0) return -1;
  return answerDepthList[0];
}
