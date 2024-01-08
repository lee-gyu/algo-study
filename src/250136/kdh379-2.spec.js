import { problemInfo } from ".";
import { testRunner } from "../utils";

testRunner("kdh79", problemInfo, solution);

function solution(land) {
    const copyLand = land.map((row) => row.map(() => 0));
    const sectionSize = {};

    initSection();

    return getMaximum();

    // 최대 세로 500 가로 500
    // DFS : 재귀 호출 사용 -> 함수 호출이 25만번 될 수 있음
    // BFS
    function markLand(sectionId, r, c) {
        const stack = [[r, c]];
        let sectionLength = 0;

        copyLand[r][c] = sectionId;

        function validLand(r, c) {
            if (copyLand[r] && copyLand[r][c] === 0 && land[r][c] > 0) {
                copyLand[r][c] = sectionId;
                stack.push([r, c]);
            }
        }

        while (stack.length) {
            const [r, c] = stack.pop();
            ++sectionLength;

            // 상하좌우 확인 후, 유효한 땅이면 stack에 넣기
            validLand(r, c - 1);
            validLand(r, c + 1);
            validLand(r - 1, c);
            validLand(r + 1, c);
        }

        sectionSize[sectionId] = sectionLength;
    }

    function initSection() {
        const rowLen = land.length;
        const colLen = land[0].length;
        let sectionId = 0;

        for (let r = 0; r < rowLen; ++r)
            for (let c = 0; c < colLen; ++c)
                if (land[r][c] !== 0 && copyLand[r][c] === 0)
                    markLand(++sectionId, r, c);
    }

    function getMaximum() {
        let maxValue = 0;
        const rowLen = copyLand.length;
        const colLen = copyLand[0].length;

        for (let c = 0; c < colLen; ++c) {
            const flag = {};
            let amount = 0;

            for (let r = 0; r < rowLen; ++r) {
                const curCopyLand = copyLand[r][c];

                if (curCopyLand in sectionSize && !flag[curCopyLand]) {
                    amount += sectionSize[curCopyLand];
                    flag[curCopyLand] = true;
                }
            }

            maxValue = Math.max(maxValue, amount);
        }

        return maxValue;
    }
}
