/**
 * 문제유형:
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/150369
 */

// ---

export function problemInfo() {
    return {
        problemId: "150369",
        testSuite: [
            {
                input: [4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]],
                output: 16,
            },
            {
                input: [2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]],
                output: 30,
            },
            {
                input: [1, 5, [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]],
                output: 6,
            },
        ],
    };
}
