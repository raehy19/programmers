// https://school.programmers.co.kr/learn/courses/30/lessons/86971

class Node {
  constructor(id) {
    this.id = id;
    this.mother = null;
    this.childs = [];
    this.wireCnt = 0;
  }

  addChild(childNode) {
    this.childs.push(childNode);
    childNode.mother = this;
  }

  calWireCnt() {
    this.wireCnt = this.childs.length;
    for (const child of this.childs) {
      this.wireCnt += child.calWireCnt();
    }
    return this.wireCnt;
  }

  calCutDiffValue() {
    if (this.mother === null) return Number.MAX_VALUE;
    let temp = this.mother;
    while (temp.mother !== null) {
      temp = temp.mother;
    }
    return Math.abs(temp.wireCnt - (this.wireCnt + 1) - this.wireCnt);
  }
}

function solution(n, wires) {
  const Nodes = [];

  for (let i = 0; i < n + 1; i++) {
    const newNode = new Node(i);
    Nodes.push(newNode);
  }

  wires.sort((a, b) => a[0] - b[0]);
  for (const wire of wires) {
    if (Nodes[wire[1]].mother === null) {
      Nodes[wire[0]].addChild(Nodes[wire[1]]);
    } else {
      Nodes[wire[1]].addChild(Nodes[wire[0]]);
    }
  }

  for (const node of Nodes) {
    node.calWireCnt();
  }

  for (const node of Nodes) {
    console.log(node);
  }
  const cutDiffs = [];
  for (const node of Nodes) {
    cutDiffs.push(node.calCutDiffValue());
  }
  console.log(cutDiffs);

  return Math.min(...cutDiffs);
}

console.log(
  solution(11, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 7],
    [7, 8],
    [7, 9],
    [6, 9],
    [6, 10],
    [6, 11],
  ])
);
