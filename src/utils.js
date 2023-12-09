import { describe, test, expect } from "vitest";

export function testRunner(userName, problemInfo, solutionFunc) {
    const { problemId, testSuite } = problemInfo();
    let caseId = 0;

    for (const testCase of testSuite) {
        describe(`${problemId}@${userName}`, () => {
            test(`#${++caseId}`, () => {
                const { input, output } = testCase;
                const solutionOutput = solutionFunc(...input);

                expect(solutionOutput).toStrictEqual(output);
            });
        });
    }
}
