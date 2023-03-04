function isOutDated(today, expiration) {
  if (today[0] > expiration[0]) return true;
  if (today[0] === expiration[0]) {
    if (today[1] > expiration[1]) return true;
    if (today[1] === expiration[1]) {
      if (today[2] >= expiration[2]) return true;
    }
  }
  return false;
}

function solution(today, terms, privacies) {
  const answer = [];
  const termsObject = {};
  const todayArr = today.split('.').map((value) => parseInt(value));

  for (const term of terms) {
    termsObject[term.charAt(0)] = parseInt(term.split(' ')[1]);
  }
  for (let i = 0; i < privacies.length; ++i) {
    const Date = privacies[i]
      .split(' ')[0]
      .split('.')
      .map((value) => parseInt(value));
    Date[1] += termsObject[privacies[i].charAt(privacies[i].length - 1)];
    if (Date[1] > 12) {
      Date[0] += Math.floor(Date[1] / 12);
      Date[1] %= 12;
      if (Date[1] === 0) {
        Date[0] -= 1;
        Date[1] = 12;
      }
    }
    if (isOutDated(todayArr, Date)) answer.push(i + 1);
  }
  return answer;
}
