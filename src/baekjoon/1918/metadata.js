/**
 * 문제유형: 스택
 *
 * @link https://www.acmicpc.net/problem/1918
 */

// ---

export default {
    problemId: "baekjoon@1918",
    testSuite: [
        {
            input: [
                [ "A*(B+C)" ],
                [ "A+B" ],
                [ "A+B*C" ],
                [ "A+B*C-D/E" ],

            ],
            output: [
                "ABC+*",
                "AB+",
                "ABC*+",
                "ABC*+DE/-"
            ],
        },
    ],
}
