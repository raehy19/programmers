// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
	var answer = '';

	for (const completer of completion) {
		for (let i = 0; i < participant.length; ++i) {
			if (participant[i] === completer) {
				participant.splice(i, 1);
				break;
			}
		}
	}
	answer = participant[0];
	return answer;
}