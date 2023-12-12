import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

// 길이가 최대 17이 되므로, 모든 경우의 수를 다 해보는 것이 가능하다.
// 모든 경우의 수를 다 해보는 것은 DFS로 구현할 수 있다.
// 자료구조가 이미 다 구현되어 있어, Tree, Node 등의 타입은 구현하면 더 복잡해진다.

/**
 * 교훈
 * 문제의 크기가 작으면, 완전 탐색 법을 생각하자
 * 주어진 input에 따라 자료구조를 구현하는 것이 오히려 풀이를 복잡하게 한다...
 * 브루트 포스로 풀이를 생각하고, 연습 필요
 */

// ---

function solution(info, edges) {
    const visited = {};
    let result = 0;

    visited[0] = true;
    dfs(1, 0);

    return result;

    function dfs(sheep, wolf) {
        if (sheep > wolf) result = Math.max(result, sheep);
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
