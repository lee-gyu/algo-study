/**
 * 문제유형: 효율적인 자료구조 처리
 *
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/72412?language=javascript
 */

// ---

export function problemInfo() {
    return {
        problemId: "72412",
        testSuite: [
            {
                input: [
                    [
                        "java backend junior pizza 150",
                        "python frontend senior chicken 210",
                        "python frontend senior chicken 150",
                        "cpp backend senior pizza 260",
                        "java backend junior chicken 80",
                        "python backend senior chicken 50",
                    ],
                    [
                        "java and backend and junior and pizza 100",
                        "python and frontend and senior and chicken 200",
                        "cpp and - and senior and pizza 250",
                        "- and backend and senior and - 150",
                        "- and - and - and chicken 100",
                        "- and - and - and - 150",
                    ],
                ],
                output: [1, 1, 1, 1, 2, 4],
            },
        ],
    };
}
