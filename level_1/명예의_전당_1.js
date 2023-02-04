// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
	let answer = [];
	let hall_of_fame = [];

	for (let i = 0; i < score.length; ++i) {
		hall_of_fame.push(score[i]);
		hall_of_fame.sort((a, b) => b - a);
		(hall_of_fame.length > k) && hall_of_fame.pop();
		answer.push(hall_of_fame[Math.min(hall_of_fame.length - 1, k - 1)]);
	}
	return answer;
}