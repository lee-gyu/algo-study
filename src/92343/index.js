/**
 * 문제유형: 그래프, 다익스트라
 *
 * level: 3
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/92343
 */

// ---

export function problemInfo() {
    return {
        problemId: "92343",
        testSuite: [
            {
                input: [
                    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
                    [
                        [0, 1],
                        [1, 2],
                        [1, 4],
                        [0, 8],
                        [8, 7],
                        [9, 10],
                        [9, 11],
                        [4, 3],
                        [6, 5],
                        [4, 6],
                        [8, 9],
                    ],
                ],
                output: 5,
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
                    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
                    [
                        [0, 1],
                        [0, 2],
                        [1, 3],
                        [1, 4],
                        [2, 5],
                        [2, 6],
                        [3, 7],
                        [4, 8],
                        [6, 9],
                        [9, 10],
                    ],
                ],
                output: 5,
            },
        ],
    };
}
