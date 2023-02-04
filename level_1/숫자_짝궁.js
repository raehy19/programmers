// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
	var answer = '';
	const [x_arr, y_arr] = [X.split(''), Y.split('')]
	const numSet = []

	for (let i = 0; i < x_arr.length; ++i) {
		for (let j = 0; j < y_arr.length; ++j) {
			if (x_arr[i] === y_arr[j]) {
				numSet.push(x_arr[i]);
				x_arr.splice(i, 1);
				y_arr.splice(j, 1);
				--i;
				break;
			}
		}
	}
	numSet.sort((a, b) => (b - a));
	answer = numSet.join("");
	if (answer.length === 0) return '-1';
	if (answer[0] === '0') return '0';
	return answer;
}
