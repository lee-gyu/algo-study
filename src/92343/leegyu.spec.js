import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

// 길이가 최대 17이 되므로, 모든 경우의 수를 다 해보는 것이 가능하다.
// 모든 경우의 수를 다 해보는 것은 DFS로 구현할 수 있다.
// 자료구조가 이미 다 구현되어 있어, Tree, Node 등의 타입은 구현하면 더 복잡해진다.

function solution(info, edges) {
    const visited = {};
    const answer = [];

    visited[0] = true;
    dfs(1, 0);

    return Math.max(...answer);

    function dfs(sheep, wolf) {
        if (sheep > wolf) answer.push(sheep);
        else return;

        for (const [parent, child] of edges) {
            if (visited[parent] && !visited[child]) {
                visited[child] = true;

                if (info[child] === 0) dfs(sheep + 1, wolf);
                else dfs(sheep, wolf + 1);

                visited[child] = false;
            }
        }
    }
}
