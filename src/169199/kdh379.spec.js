import { problemInfo } from ".";
import { testRunner } from "../utils";

testRunner("kdh379", problemInfo, solution);

function solution(board) {
    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const copyBoard = board.map((row) => row.split("").map(() => 0));
    let start;

    // 시작점 찾기
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[0].length; j++)
            if (board[i][j] === "R") start = [i, j];

    copyBoard[start[0]][start[1]] = 1;

    const queue = [[...start, 0]];
    let answer = -1;

    // BFS
    while (queue.length) {
        const [x, y, cnt] = queue.shift();

        if (board[x][y] === "G") return (answer = cnt);

        for (const [dx, dy] of direction) {
            let nextX = x;
            let nextY = y;

            // 맨 끝 or "D"를 만날 때까지 이동
            while (validMove(nextX + dx, nextY + dy)) {
                nextX += dx;
                nextY += dy;
            }

            if (copyBoard[nextX][nextY] === 0) {
                copyBoard[nextX][nextY] = 1;
                queue.push([nextX, nextY, cnt + 1]);
            }
        }
    }

    return answer;

    function validMove(x, y) {
        return (
            x >= 0 &&
            x < board.length &&
            y >= 0 &&
            y < board[0].length &&
            board[x][y] !== "D"
        );
    }
}
