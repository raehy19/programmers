// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  const [mapWidth, mapHeight] = [wallpaper[0].length, wallpaper.length];
  const map = wallpaper.map((line) => line.split(''));
  let [luy, lux, rdy, rdx] = [mapHeight, mapWidth, 0, 0];

  for (let y = 0; y < mapHeight; ++y) {
    for (let x = 0; x < mapWidth; ++x) {
      if (map[y][x] === '#') {
        if (y < luy) luy = y;
        if (x < lux) lux = x;
        if (y + 1 > rdy) rdy = y + 1;
        if (x + 1 > rdx) rdx = x + 1;
      }
    }
  }

  return [luy, lux, rdy, rdx];
}
