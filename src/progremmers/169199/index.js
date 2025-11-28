/**
 * 문제유형: BFS
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/169199
 */

// ---

export function problemInfo() {
    return {
        problemId: "169199",
        testSuite: [
            {
                input: [
                    ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."],
                ],
                output: 7,
            },
            {
                input: [[".D.R", "....", ".G..", "...D"]],
                output: -1,
            },
        ],
    };
}
