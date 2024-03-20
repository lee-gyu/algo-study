/**
 * 문제유형:
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/172927
 */

// ---

export function problemInfo() {
    return {
        problemId: "172927",
        testSuite: [
            {
                input: [
                    [1, 3, 2],
                    [
                        "diamond",
                        "diamond",
                        "diamond",
                        "iron",
                        "iron",
                        "diamond",
                        "iron",
                        "stone",
                    ],
                ],
                output: 12,
            },
            {
                input: [
                    [0, 1, 1],
                    [
                        "diamond",
                        "diamond",
                        "diamond",
                        "diamond",
                        "diamond",
                        "iron",
                        "iron",
                        "iron",
                        "iron",
                        "iron",
                        "diamond",
                    ],
                ],
                output: 50,
            },
            {
                input: [
                    [1, 1, 1],
                    [
                        "stone",
                        "stone",
                        "stone",
                        "stone",
                        "stone",
                        "diamond",
                        "diamond",
                        "diamond",
                        "diamond",
                        "diamond",
                        "stone",
                        "stone",
                        "stone",
                        "stone",
                        "stone",
                    ],
                ],
                output: 15,
            },
            {
                input: [
                    [0, 0, 1],
                    ["stone", "stone", "stone", "stone", "stone", "diamond"],
                ],
                output: 5,
            },
        ],
    };
}
