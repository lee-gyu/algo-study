/**
 * 문제유형: 조건 분류 문제?
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/258711
 */

// ---

export function problemInfo() {
    return {
        problemId: "258711",
        testSuite: [
            {
                input: [
                    [
                        [2, 3],
                        [4, 3],
                        [1, 1],
                        [2, 1],
                    ],
                ],
                output: [2, 1, 1, 0],
            },
            {
                input: [
                    [
                        [4, 11],
                        [1, 12],
                        [8, 3],
                        [12, 7],
                        [4, 2],
                        [7, 11],
                        [4, 8],
                        [9, 6],
                        [10, 11],
                        [6, 10],
                        [3, 5],
                        [11, 1],
                        [5, 3],
                        [11, 9],
                        [3, 8],
                    ],
                ],
                output: [4, 0, 1, 2],
            },
        ],
    };
}
