/**
 * 문제유형: 브루트포스
 * lee-gyu comment: 문제가 복잡하고, 구현은 어려운 문제로 보이니 긴 시간을 가지고 생각해볼 문제임 (정답률 9%)
 * level: 3
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/250134
 */

// ---

export function problemInfo() {
    return {
        problemId: "250134",
        testSuite: [
            {
                // #1
                input: [
                    [
                        [1, 4],
                        [0, 0],
                        [2, 3],
                    ],
                ],
                output: 3,
            },
            {
                // #2
                input: [
                    [
                        [1, 0, 2],
                        [0, 0, 0],
                        [5, 0, 5],
                        [4, 0, 3],
                    ],
                ],
                output: 7,
            },
            {
                // #3
                input: [
                    [
                        [1, 5],
                        [2, 5],
                        [4, 5],
                        [3, 5],
                    ],
                ],
                output: 0,
            },
            {
                // #4
                input: [[[4, 1, 2, 3]]],
                output: 0,
            },
            {
                // #5
                input: [
                    [
                        [1, 0, 5, 2],
                        [5, 0, 5, 0],
                        [5, 0, 5, 0],
                        [3, 4, 0, 0],
                    ],
                ],
                output: 5,
            },
            {
                // #6
                input: [
                    [
                        [1, 0, 2, 0],
                        [5, 0, 0, 0],
                        [5, 0, 5, 5],
                        [4, 3, 5, 5],
                    ],
                ],
                output: 6,
            },
            // #7
            {
                input: [
                    [
                        [0, 0, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 2, 0],
                        [4, 3, 0, 0],
                    ],
                ],
                output: 4,
            },
        ],
    };
}
