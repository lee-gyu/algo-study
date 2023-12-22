/**
 * 문제유형: greedy?
 * level: 3
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/161988
 */

// ---

export function problemInfo() {
    return {
        problemId: "161988",
        testSuite: [
            {
                input: [[2, 3, -6, 1, 3, -1, 2, 4]],
                output: 10,
            },
            {
                input: [[90, 20, 40, -30, 40, -50, 70]],
                output: 300,
            },
            {
                input: [[2, 3, -6, 1, 3, 5, 99]],
                output: 99,
            },
            {
                input: [[3, -6, 1, 3, -5, 99]],
                output: 107,
            },
        ],
    };
}
