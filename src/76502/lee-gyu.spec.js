import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

// ---

function solution(s) {
    let ret = 0;

    main: for (let i = 0; i < s.length; ++i) {
        // text 회전
        const text = s.slice(i) + s.slice(0, i);
        const stackAry = [];

        for (const ch of text) {
            if (ch === "(") stackAry.push(")");
            else if (ch === "{") stackAry.push("}");
            else if (ch === "[") stackAry.push("]");
            // 닫는 괄호가 같은가?
            else if (ch === stackAry[stackAry.length - 1]) {
                stackAry.pop(); // 같으면 스택에서 pop
            } else {
                // 불일치 케이스
                continue main;
            }
        }

        // 올바른 괄호 케이스 (스택이 비어야 함)
        if (stackAry.length === 0) ++ret;
    }

    return ret;
}
