/**
 * 문제유형:
 *
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/250135
 */

// ---

export function problemInfo() {
    return {
        problemId: "250135",
        testSuite: [
            {
                input: [0, 5, 30, 0, 7, 0],
                output: 2,
            },
            {
                input: [12, 0, 0, 12, 0, 30],
                output: 1,
            },
            {
                input: [0, 6, 1, 0, 6, 6],
                output: 0,
            },
            {
                input: [11, 59, 30, 12, 0, 0],
                output: 1,
            },
            {
                input: [11, 58, 59, 11, 59, 0],
                output: 1,
            },
            {
                input: [1, 5, 5, 1, 5, 6],
                output: 2,
            },
            {
                input: [0, 0, 0, 23, 59, 59],
                output: 2852,
            },
        ],
    };
}
