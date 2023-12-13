import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu2", problemInfo, solution);

// 풀이 v2
// 완전 탐색 복습
// 메모리 복제가 빈번히 발생하고, visited 체크를 배열로 하는 이슈로 성능은 약간 더 느림

function solution(info, edges) {
    const edgeDict = Object.create(null);
    let result = 0;

    edges.forEach(([p, c]) => {
        if (!edgeDict[p]) edgeDict[p] = [c];
        else edgeDict[p].push(c);
    });

    dfs(1, 0, [0]);

    return result;

    function dfs(sheep, wolf, visitedList) {
        if (sheep <= wolf) return;

        result = Math.max(result, sheep);

        for (const node of visitedList) {
            if (!edgeDict[node]) continue;

            for (const child of edgeDict[node]) {
                if (visitedList.includes(child)) continue;

                if (info[child] === 0)
                    dfs(sheep + 1, wolf, [...visitedList, child]);
                else dfs(sheep, wolf + 1, [...visitedList, child]);
            }
        }
    }
}
