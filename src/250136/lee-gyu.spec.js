import { testRunner } from "../utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

function solution(land) {
    const copyLand = land.map((row) => row.map(() => 0));
    const sectionSize = {};

    initSection();

    return getMaximum();

    // DFS (재귀 호출 탐색 방법) -> 함수가 25만번 호출될 수 있으므로,, 메모리
    // BFS (queue/stack 이용한,,, 탐색)
    function markSection(sectionId, r, c) {
        const stack = [[r, c]];
        let sectionLength = 0;

        copyLand[r][c] = sectionId;

        function extendAction(r, c) {
            // 유효한 범위 확인
            if (copyLand[r] && copyLand[r][c] === 0 && land[r][c]) {
                // 메모리에 mark 및 stack에 추가
                copyLand[r][c] = sectionId;
                stack.push([r, c]);
            }
        }

        while (stack.length) {
            const [r, c] = stack.pop();

            // 현재 구역의 크기 증가
            ++sectionLength;

            // 상하좌우 확인하고, 지금 갈 수 있는 구역이면 stack에 넣기
            extendAction(r, c - 1);
            extendAction(r, c + 1);
            extendAction(r - 1, c);
            extendAction(r + 1, c);
        }

        sectionSize[sectionId] = sectionLength;
    }

    function initSection() {
        const rowLen = land.length;
        // 1보다 크니까 0을 바로 참조해도 됨
        const colLen = land[0].length;

        let sectionId = 0;

        for (let r = 0; r < rowLen; ++r) {
            for (let c = 0; c < colLen; ++c) {
                if (land[r][c] !== 0 && copyLand[r][c] === 0) {
                    // 석유 구역 발견
                    markSection(++sectionId, r, c);
                }
            }
        }
    }

    function getMaximum() {
        let maxValue = 0;
        const colLen = land[0].length;
        const rowLen = land.length;

        for (let c = 0; c < colLen; ++c) {
            let amount = 0;
            const flag = {};

            for (let r = 0; r < rowLen; ++r) {
                const curCopyLand = copyLand[r][c];
                if (curCopyLand !== 0 && !flag[curCopyLand]) {
                    amount += sectionSize[curCopyLand];
                    flag[curCopyLand] = true;
                }
            }

            maxValue = Math.max(maxValue, amount);
        }

        return maxValue;
    }
}
