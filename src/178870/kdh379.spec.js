import { problemInfo } from ".";
import { testRunner } from "../utils";

testRunner("kdh379", problemInfo, solution);

function solution(sequence, k) {
    var answer = [];

    let sum = 0;
    let left = 0;
    let right = -1;

    while (left < sequence.length || right < sequence.length) {
        if (sum < k) {
            right++;
            sum += sequence[right];
        } else {
            sum -= sequence[left];
            left++;
        }
        if (sum === k) answer.push([left, right]);
    }

    answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]) || a[0] - b[0]);
    return answer[0];
}
