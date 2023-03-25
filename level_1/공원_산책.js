// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function findStart(park) {
  for (let y = 0; y < park.length; ++y) {
    for (let x = 0; x < park[0].length; ++x) {
      if (park[y][x] === 'S') {
        return { x, y };
      }
    }
  }
}

function isMapOut(park, location) {
  return (
    location.x < 0 ||
    location.y < 0 ||
    location.x > park[0].length - 1 ||
    location.y > park.length - 1
  );
}

function findDestination(route, location, distance) {
  let [x, y] = [location.x, location.y];

  if (route[0] === 'N') y -= distance;
  else if (route[0] === 'S') y += distance;
  else if (route[0] === 'W') x -= distance;
  else if (route[0] === 'E') x += distance;
  return { x, y };
}

function solution(park, routes) {
  let location = findStart(park);

  for (const route of routes) {
    const distance = parseInt(route[2]);
    let dest = findDestination(route, location, distance);
    let flag = false;

    if (isMapOut(park, dest)) continue;

    if (route[0] === 'N') {
      for (let i = 1; i < distance + 1; ++i) {
        if (park[location.y - i][location.x] === 'X') flag = true;
      }
      if (!flag) location = dest;
    } else if (route[0] === 'S') {
      for (let i = 1; i < distance + 1; ++i) {
        if (park[location.y + i][location.x] === 'X') flag = true;
      }
      if (!flag) location = dest;
    } else if (route[0] === 'W') {
      for (let i = 1; i < distance + 1; ++i) {
        if (park[location.y][location.x - i] === 'X') flag = true;
      }
      if (!flag) location = dest;
    } else if (route[0] === 'E') {
      for (let i = 1; i < distance + 1; ++i) {
        if (park[location.y][location.x + i] === 'X') flag = true;
      }
    }
    if (!flag) location = dest;
  }
  return [location.y, location.x];
}
