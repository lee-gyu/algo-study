/**
 * 문제유형: Stack
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/176962
 */

// ---

export function problemInfo() {
    return {
        problemId: "176962",
        testSuite: [
            {
                input: [
                    [
                        ["korean", "11:40", "30"],
                        ["english", "12:10", "20"],
                        ["math", "12:30", "40"],
                    ],
                ],
                output: ["korean", "english", "math"],
            },
            {
                input: [
                    [
                        ["science", "12:40", "50"],
                        ["music", "12:20", "40"],
                        ["history", "14:00", "30"],
                        ["computer", "12:30", "100"],
                    ],
                ],
                output: ["science", "history", "computer", "music"],
            },
            {
                input: [
                    [
                        ["aaa", "12:00", "20"],
                        ["bbb", "12:10", "30"],
                        ["ccc", "12:40", "10"],
                    ],
                ],
                output: ["bbb", "ccc", "aaa"],
            },
        ],
    };
}
