// https://school.programmers.co.kr/learn/courses/30/lessons/154540

function solution(maps) {
  const [mapX, mapY] = [maps[0].length, maps.length];
  const checker = [];
  const answer = [];

  function find_food(x, y) {
    let sum = parseInt(maps[y][x]);
    if (checker[y][x] > 0) return 0;
    checker[y][x] = 1;
    if (y + 1 < mapY && maps[y + 1][x] !== 'X') sum += find_food(x, y + 1);
    if (x + 1 < mapX && maps[y][x + 1] !== 'X') sum += find_food(x + 1, y);
    if (y - 1 > -1 && maps[y - 1][x] !== 'X') sum += find_food(x, y - 1);
    if (x - 1 > -1 && maps[y][x - 1] !== 'X') sum += find_food(x - 1, y);
    return sum;
  }

  for (let y = 0; y < maps.length; ++y) {
    const row = [];
    for (let x = 0; x < maps[0].length; ++x) {
      row.push(0);
    }
    checker.push(row);
  }

  for (let y = 0; y < mapY; ++y) {
    for (let x = 0; x < mapX; ++x) {
      if (checker[y][x] > 0) continue;
      if (maps[y][x] !== 'X') answer.push(find_food(x, y));
    }
  }
  if (answer.length === 0) answer.push(-1);
  answer.sort((a, b) => a - b);
  return answer;
}
