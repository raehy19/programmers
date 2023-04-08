// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  const reservations = book_time
    .map((e) => [
      parseInt(e[0].split(':')[0]) * 60 + parseInt(e[0].split(':')[1]),
      parseInt(e[1].split(':')[0]) * 60 + parseInt(e[1].split(':')[1]) + 9,
    ])
    .sort((a, b) => a[0] - b[0]);

  function isOverlap(reservation1, reservation2) {
    return !(
      (reservation1[1] < reservation2[0] &&
        reservation1[1] < reservation2[1]) ||
      (reservation2[1] < reservation1[0] && reservation2[1] < reservation1[1])
    );
  }

  function checkOverlapOK(reservation, room) {
    for (const roomReservation of room) {
      if (isOverlap(roomReservation, reservation)) {
        return false;
      }
    }
    return true;
  }

  const rooms = [[]];
  for (const reservation of reservations) {
    for (let i = 0; i < rooms.length; ++i) {
      if (rooms[i].length === 0) {
        rooms[i].push(reservation);
        break;
      }
      if (checkOverlapOK(reservation, rooms[i])) {
        rooms[i].push(reservation);
        break;
      } else if (i === rooms.length - 1) {
        rooms.push([reservation]);
        break;
      }
    }
  }
  return rooms.length;
}
