/**
 * 문제유형: 브루트 포스
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/150368
 */

// ---

export function problemInfo() {
    return {
        problemId: "150368",
        testSuite: [
            {
                input: [
                    [
                        [40, 10000],
                        [25, 10000],
                    ],
                    [7000, 9000],
                ],
                output: [1, 5400],
            },
            {
                input: [
                    [
                        [40, 2900],
                        [23, 10000],
                        [11, 5200],
                        [5, 5900],
                        [40, 3100],
                        [27, 9200],
                        [32, 6900],
                    ],
                    [1300, 1500, 1600, 4900],
                ],
                output: [4, 13860],
            },
        ],
    };
}
