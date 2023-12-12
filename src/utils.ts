/* eslint-disable @typescript-eslint/no-explicit-any */
type ProblemInfoFunc<T_Input, T_Output> = () => {
    problemId: string;
    testSuite: TestCase<T_Input, T_Output>[];
};

type SolutionFunc<T_Input, T_Output> = (...args: T_Input[]) => T_Output;

type TestCase<T_Input, T_Output> = {
    input: T_Input[];
    output: T_Output;
};

export function testRunner<T_Input, T_Output>(
    userName: string,
    problemInfo: ProblemInfoFunc<T_Input, T_Output>,
    solutionFunc: SolutionFunc<T_Input, T_Output>,
    runIds = []
) {
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
