import { testRunner as testRunnerFunc } from "src/utils";

declare global {
    var testRunner: typeof testRunnerFunc;
}

export {};