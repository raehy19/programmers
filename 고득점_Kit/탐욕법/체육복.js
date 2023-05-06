// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const clothCount = {};
  let answer = 0;

  for (let i = 1; i < n + 1; ++i) {
    clothCount[i] = 1;
  }
  for (const lostStudentNum of lost) {
    --clothCount[lostStudentNum];
  }
  for (const reserveStudentNum of reserve) {
    ++clothCount[reserveStudentNum];
  }
  for (const studentNum in clothCount) {
    if (clothCount[studentNum] === 2) {
      if (
        parseInt(studentNum) > 1 &&
        clothCount[parseInt(studentNum) - 1] === 0
      ) {
        ++clothCount[parseInt(studentNum) - 1];
        --clothCount[studentNum];
      } else if (
        parseInt(studentNum) < Object.keys(clothCount).length &&
        clothCount[parseInt(studentNum) + 1] === 0
      ) {
        ++clothCount[parseInt(studentNum) + 1];
        --clothCount[studentNum];
      }
    }
  }
  for (const studentNum in clothCount) {
    if (clothCount[studentNum] > 0) ++answer;
  }
  return answer;
}
