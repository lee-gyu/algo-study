import { problemInfo } from ".";
import { testRunner } from "../../utils";

testRunner("kdh379", problemInfo, solution);

const CREATED = "created";
const BAR = "bar";
const EIGHT = "eight";

// 그래프는 각 정점과 단선으로 연결되어 있음
// 생성한 정점, 각 그래프는 조건이 있음
// 생성한 정점 : 보낸 횟수 2이상, 받은 횟수가 없는 정점
// 도넛 그래프 : 8자, 막대가 아닌 그래프 ( 정점에서 보낸 횟수 - 막대 + 8자 그래프 수 )
// 막대 그래프 : 보낸 횟수 0
// 8자 그래프 : 받은 횟수 2 이상, 보낸 횟수 2 이상
function solution(edges) {
    const recordMap = {};
    // 구간 별 send 횟수, receive 횟수

    initRecordMap();
    return countGraph();

    function initRecordMap() {
        for (const [start, end] of edges) {
            if (!recordMap[start]) recordMap[start] = { send: 0, receive: 0 };
            if (!recordMap[end]) recordMap[end] = { send: 0, receive: 0 };

            recordMap[start].send++;
            recordMap[end].receive++;
        }
    }

    function countGraph() {
        let created = 0;
        let bar = 0;
        let eight = 0;

        for (const point in recordMap) {
            const graphType = getGraphType(point);

            if (graphType === CREATED) created = Number(point);
            else if (graphType === BAR) ++bar;
            else if (graphType === EIGHT) ++eight;
        }

        return [created, getDonutCount(created, bar, eight), bar, eight];
    }

    function getGraphType(point) {
        const { send, receive } = recordMap[point];

        if (receive === 0 && send >= 2) return CREATED;
        else if (send === 0) return BAR;
        else if (receive >= 2 && send >= 2) return EIGHT;
    }

    function getDonutCount(point, bar, eight) {
        const { send } = recordMap[point];
        return send - (bar + eight);
    }
}
