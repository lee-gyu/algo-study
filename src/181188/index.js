/**
 * 문제유형: Greedy
 *
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/181188
 */

// ---

export function problemInfo() {
    return {
        problemId: "181188",
        testSuite: [
            {
                input: [
                    [
                        [4, 5],
                        [4, 8],
                        [10, 14],
                        [11, 13],
                        [5, 12],
                        [3, 7],
                        [1, 4],
                    ],
                ],
                output: 3,
            },
            {
                input: [
                    [
                        [1, 2],
                        [2, 4],
                        [3, 4],
                        [5, 6],
                    ],
                ],
                output: 3,
            },
            {
                input: [
                    [
                        [1, 2],
                        [3, 100],
                        [4, 5],
                        [6, 7],
                    ],
                ],
                output: 3,
            },
        ],
    };
}
