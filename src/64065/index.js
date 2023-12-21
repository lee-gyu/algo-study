/**
 * 문제유형: 문자열 처리, 정렬
 *
 * level: 2
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
 */

// ---

export function problemInfo() {
    return {
        problemId: "64065",
        testSuite: [
            {
                input: ["{{2},{2,1},{2,1,3},{2,1,3,4}}"],
                output: [2, 1, 3, 4],
            },
            {
                input: ["{{1,2,3},{2,1},{1,2,4,3},{2}}"],
                output: [2, 1, 3, 4],
            },
            {
                input: ["{{20,111},{111}}"],
                output: [111, 20],
            },
            {
                input: ["{{123}}"],
                output: [123],
            },
            {
                input: ["{{4,2,3},{3},{2,3,4,1},{2,3}}"],
                output: [3, 2, 4, 1],
            },
        ],
    };
}
