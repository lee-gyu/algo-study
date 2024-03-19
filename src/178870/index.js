/**
 * 문제유형: 투 포인터
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/181187
 */

// ---

export function problemInfo() {
    return {
        problemId: "178870",
        testSuite: [
            {
                input: [[1, 2, 3, 4, 5], 7],
                output: [2, 3],
            },
            {
                input: [[1, 1, 1, 2, 3, 4, 5], 5],
                output: [6, 6],
            },
            {
                input: [[2, 2, 2, 2, 2], 6],
                output: [0, 2],
            },
        ],
    };
}
