// https://school.programmers.co.kr/learn/courses/30/lessons/135807

function gcd(a, b) {
  if (b === 0) return a;
  else {
    return gcd(b, a % b);
  }
}

function solution(arrayA, arrayB) {
  let gcdA = arrayA[0];
  let gcdB = arrayB[0];

  for (const arrayAElement of arrayA) {
    gcdA = gcd(gcdA, arrayAElement);
  }
  for (const arrayBElement of arrayB) {
    gcdB = gcd(gcdB, arrayBElement);
  }

  if (gcdA > 1) {
    let flag = 0;
    for (const arrayBElement of arrayB) {
      if (arrayBElement % gcdA === 0) {
        flag = 1;
      }
    }
    if (flag === 1) {
      gcdA = 0;
    }
  }
  if (gcdB > 1) {
    let flag = 0;
    for (const arrayAElement of arrayA) {
      if (arrayAElement % gcdB === 0) {
        flag = 1;
      }
    }
    if (flag === 1) {
      gcdB = 0;
    }
  }
  if (Math.max(gcdA, gcdB) === 1) return 0;
  return Math.max(gcdA, gcdB);
}
