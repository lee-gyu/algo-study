import { testRunner } from "../utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

const NOT_FOUND = 9999;

function solution(maze) {
    /**
     * 0: 빈칸
     * 1: 빨간 수레 시작
     * 2: 파란 수레 시작
     * 3: 빨간 도착
     * 4: 파란 도착
     * 5: 벽
     *
     * 최대 맵 크기 4
     * 수레는 방문한 칸으로 이동 불가
     * 도착 시 수레는 움직이지 않음
     * 서로 위치 교환은 불가
     * 2개를 같은 칸으로 이동 불가
     *
     * 최대 크기가 4*4이므로, 모든 경우의 수를 다 시도해서 찾아도 된다.
     * 빨간 먼저, 파랑 먼저 모든 경우의 수로 확인
     */
    const [redLoc, blueLoc] = findInitLoc();
    const visited = createInitVisited();

    const result = find(redLoc, blueLoc, 1, 2, 0);

    // 가능한 경우 없음
    if (result === NOT_FOUND) return 0;

    return result === NOT_FOUND ? 0 : result;

    function findInitLoc() {
        const redLoc = { r: -1, c: -1 };
        const blueLoc = { r: -1, c: -1 };

        maze.forEach((row, r) => {
            row.forEach((val, c) => {
                if (val === 1) {
                    redLoc.r = r;
                    redLoc.c = c;
                } else if (val === 2) {
                    blueLoc.r = r;
                    blueLoc.c = c;
                }
            });
        });

        return [redLoc, blueLoc];
    }

    function createInitVisited() {
        return maze.map((row) =>
            // bit 00 blue / red
            row.map((val) => (val >= 1 && val <= 2 ? val : 0))
        );
    }

    function canMove(visited, r, c, val, lockLoc) {
        return (
            visited[r] !== undefined &&
            maze[r][c] !== undefined &&
            // 현재 선점한 공간은 안됨
            !(lockLoc.r === r && lockLoc.c === c) &&
            // 벽 없음
            maze[r][c] !== 5 &&
            // 방문 기록 없음
            (visited[r][c] & val) === 0
        );
    }

    function getCanMovLocList(loc, val, lockLoc) {
        const { r, c } = loc;

        // 현재 위치가 도착위치라면 바로 return null (도착 처리)
        if (maze[r][c] === val + 2) return null;

        const canMovLocList = [];

        // 상
        canMove(visited, r - 1, c, val, lockLoc) &&
            canMovLocList.push({ r: r - 1, c });
        // 하
        canMove(visited, r + 1, c, val, lockLoc) &&
            canMovLocList.push({ r: r + 1, c });
        // 좌
        canMove(visited, r, c - 1, val, lockLoc) &&
            canMovLocList.push({ r, c: c - 1 });
        // 우
        canMove(visited, r, c + 1, val, lockLoc) &&
            canMovLocList.push({ r, c: c + 1 });

        return canMovLocList;
    }

    function toggleVisit(r, c, val) {
        visited[r][c] ^= val;
    }

    function runNextLoc(loc1, loc2, val, turn) {
        const nextVal = val === 1 ? 2 : 1;
        let result = NOT_FOUND;

        // 다 도착한 경우 턴 수 return
        if (
            maze[loc1.r][loc1.c] === val + 2 &&
            maze[loc2.r][loc2.c] === nextVal + 2
        )
            return turn;

        const nextLoc1List = getCanMovLocList(loc1, val, loc2);

        if (nextLoc1List !== null) {
            if (nextLoc1List.length === 0) return NOT_FOUND;

            for (const nextLoc1 of nextLoc1List) {
                toggleVisit(nextLoc1.r, nextLoc1.c, val);

                // nextLoc2
                const nextLoc2List = getCanMovLocList(loc2, nextVal, nextLoc1);

                if (nextLoc2List === null) {
                    // null인 경우는 도착했으므로 다음 턴 실행
                    // 다음 턴 실행
                    result = Math.min(
                        result,
                        find(nextLoc1, loc2, val, nextVal, turn + 1)
                    );
                } else if (nextLoc2List.length) {
                    for (const nextLoc2 of nextLoc2List) {
                        toggleVisit(nextLoc2.r, nextLoc2.c, nextVal);

                        // 다음 턴 실행
                        result = Math.min(
                            result,
                            find(nextLoc1, nextLoc2, val, nextVal, turn + 1)
                        );

                        // blue 원상 복귀
                        toggleVisit(nextLoc2.r, nextLoc2.c, nextVal);
                    }
                }

                toggleVisit(nextLoc1.r, nextLoc1.c, val);
            }
        }

        return result;
    }

    function find(loc1, loc2, loc1Val, loc2Val, turn) {
        return Math.min(
            runNextLoc(loc1, loc2, loc1Val, turn),
            runNextLoc(loc2, loc1, loc2Val, turn)
        );
    }
}
