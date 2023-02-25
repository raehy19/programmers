// https://school.programmers.co.kr/learn/courses/30/lessons/154538

class node {
  value;
  depth;
  plus_n;
  double;
  triple;
  constructor(value, depth, n, y, answerDepthList) {
    this.value = value;
    this.depth = depth;
    if (this.value === y) {
      if (answerDepthList.length === 0 || answerDepthList[0] > this.depth)
        answerDepthList.push(this.depth);
    }
    this.plus_n = value + n;
    this.double = value * 2;
    this.triple = value * 3;
  }

  addChild(y, n, nodelist, answerDepthList) {
    if (answerDepthList.length !== 0 && answerDepthList[0] <= this.depth + 2)
      return;
    if (this.plus_n <= y)
      nodelist.push(
        new node(this.plus_n, this.depth + 1, n, y, answerDepthList)
      );
    if (this.double <= y)
      nodelist.push(
        new node(this.double, this.depth + 1, n, y, answerDepthList)
      );
    if (this.triple <= y)
      nodelist.push(
        new node(this.triple, this.depth + 1, n, y, answerDepthList)
      );
  }
}

function solution(x, y, n) {
  const nodelist = [];
  const answerDepthList = [];
  nodelist.push(new node(x, 0, n, y, answerDepthList));
  for (let i = 0; i < nodelist.length; ++i) {
    nodelist[i].addChild(y, n, nodelist, answerDepthList);
  }
  // console.log(answerDepthList);
  // console.log(nodelist);
  if (answerDepthList.length === 0) return -1;
  return answerDepthList[0];
}
