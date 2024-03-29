// https://school.programmers.co.kr/learn/courses/30/lessons/169198

function solution(m, n, startX, startY, balls) {
  const answer = [];

  for (const ball of balls) {
    const distances = [];

    if (startX !== ball[0]) {
      distances.push((startX - ball[0]) ** 2 + (-startY - ball[1]) ** 2);
      distances.push(
        (startX - ball[0]) ** 2 + (startY + (n - startY) * 2 - ball[1]) ** 2
      );
    }
    if (startY !== ball[1]) {
      distances.push((-startX - ball[0]) ** 2 + (startY - ball[1]) ** 2);
      distances.push(
        (startX + (m - startX) * 2 - ball[0]) ** 2 + (startY - ball[1]) ** 2
      );
    }
    if (startX === ball[0]) {
      if (startY < ball[1]) distances.push((startY + ball[1]) ** 2);
      if (startY > ball[1]) distances.push((n - startY + n - ball[1]) ** 2);
    }
    if (startY === ball[1]) {
      if (startX < ball[0]) distances.push((startX + ball[0]) ** 2);
      if (startX > ball[0]) distances.push((m - startX + m - ball[0]) ** 2);
    }
    answer.push(Math.min(...distances));
  }

  return answer;
}
