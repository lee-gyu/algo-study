import { testRunner } from "../utils";
import { problemInfo } from "./index";

testRunner("lee-gyu2", problemInfo, solution);

function solution(maze) {
    let result = 9999;
    const visited = maze.map((row) => Array.from(row, () => 0));
    const { red, blue } = findObj(maze);

    visited[red.r][red.c] = 1;
    visited[blue.r][blue.c] = 2;

    dfs4dir(red, blue, 1, 0, 0);
    dfs4dir(blue, red, 2, 0, 0);

    return result === 9999 ? 0 : result;

    function findObj(maze) {
        const red = { r: -1, c: -1 };
        const blue = { r: -1, c: -1 };

        maze.forEach((row, r) => {
            row.forEach((col, c) => {
                if (col === 1) {
                    red.r = r;
                    red.c = c;
                } else if (col === 2) {
                    blue.r = r;
                    blue.c = c;
                }
            });
        });

        return { red, blue };
    }

    function isUndef(obj) {
        // 좌표가 잘못되지 않아야 함
        return maze[obj.r] === undefined || maze[obj.r][obj.c] === undefined;
    }

    function dfs4dir(obj, obj2, val, turn, order) {
        dfs({ r: obj.r - 1, c: obj.c }, obj2, val, turn, order);
        dfs({ r: obj.r + 1, c: obj.c }, obj2, val, turn, order);
        dfs({ r: obj.r, c: obj.c - 1 }, obj2, val, turn, order);
        dfs({ r: obj.r, c: obj.c + 1 }, obj2, val, turn, order);
    }

    function dfs(obj, obj2, val, turn, order) {
        // 잘못된 경로라면 return
        if (isUndef(obj)) return;
        // 벽은 못감
        if (maze[obj.r][obj.c] === 5) return;
        // 충돌나면 return
        if (obj.r === obj2.r && obj.c === obj2.c) return;
        // 이미 이동한 경로 return
        if (visited[obj.r][obj.c] & val) return;
        // 이미 최소값보다 크면 return
        if (turn >= result) return;

        const nextVal = val === 1 ? 2 : 1;
        const nextTurn = order === 0 ? turn + 1 : turn;

        // 정답인 경우, turn 기록 후 return
        if (
            maze[obj.r][obj.c] === val + 2 &&
            maze[obj2.r][obj2.c] === nextVal + 2
        ) {
            result = Math.min(result, nextTurn);
            return;
        }

        visited[obj.r][obj.c] ^= val;

        // obj2가 이미 도착하면 안 움직임
        if (maze[obj2.r][obj2.c] !== nextVal + 2) {
            dfs4dir(obj2, obj, nextVal, nextTurn, order ? 0 : 1);
        } else {
            dfs4dir(obj, obj2, val, nextTurn, 0);
        }

        visited[obj.r][obj.c] ^= val;
    }
}
