// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function cal_val(values, surv, score) {
  if (score === 1) values[surv.charAt(0)] += 3;
  else if (score === 2) values[surv.charAt(0)] += 2;
  else if (score === 3) values[surv.charAt(0)] += 1;
  else if (score === 5) values[surv.charAt(1)] += 1;
  else if (score === 6) values[surv.charAt(1)] += 2;
  else if (score === 7) values[surv.charAt(1)] += 3;
}

function solution(survey, choices) {
  const answer = [];
  const values = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; ++i) {
    cal_val(values, survey[i], choices[i]);
  }
  values['R'] < values['T'] ? answer.push('T') : answer.push('R');
  values['C'] < values['F'] ? answer.push('F') : answer.push('C');
  values['J'] < values['M'] ? answer.push('M') : answer.push('J');
  values['A'] < values['N'] ? answer.push('N') : answer.push('A');
  return answer.join('');
}
