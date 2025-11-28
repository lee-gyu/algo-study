/**
 * 문제유형: stack
 *
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

// ---

export function problemInfo() {
    return {
        problemId: "76502",
        testSuite: [
            {
                input: ["[](){}"],
                output: 3,
            },
            {
                input: ["}]()[{"],
                output: 2,
            },
            {
                input: ["[)(]"],
                output: 0,
            },
            {
                input: ["}}}"],
                output: 0,
            },
            {
                input: ["}"],
                output: 0,
            },
            {
                input: ["("],
                output: 0,
            },
        ],
    };
}
