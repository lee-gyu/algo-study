import { describe, test, expect } from "vitest";

export function testRunner(userName, problemInfo, solutionFunc, runIds = []) {
    const { problemId, testSuite } = problemInfo();
    let caseId = 0;

    for (const testCase of testSuite) {
        const tmpId = ++caseId;
        // runIds가 있으면 해당 id만 실행
        if (runIds.length > 0 && !runIds.includes(caseId)) continue;

        describe(`${problemId}@${userName}`, () => {
            test(`#${tmpId}`, () => {
                const { input, output } = testCase;
                const solutionOutput = solutionFunc(...input);

                expect(solutionOutput).toStrictEqual(output);
            });
        });
    }
}
