import { problemInfo } from ".";
import { testRunner } from "../utils";

testRunner("kdh379", problemInfo, solution);

// 곡괭이로 5개의 광물을 캘 수 있음
// 피로도가 높은 광물 순서대로 정렬한 뒤 좋은 곡괭이부터 사용하면 될 듯
function solution(picks, minerals) {
    let answer = 0;
    const pirodo = {
        diamond: [1, 5, 25],
        iron: [1, 1, 5],
        stone: [1, 1, 1],
    };

    const sortedMinerals = sortMinerals(minerals);
    dfs(picks, sortedMinerals);

    return answer;

    // minerals를 5개씩 묶고, 피로도가 높은 순서대로 정렬
    function sortMinerals() {
        const picksLen = picks[0] + picks[1] + picks[2];
        const mineralsGroup = [];

        for (let i = 0; i < picksLen; i++)
            mineralsGroup.push(minerals.splice(0, 5));

        return mineralsGroup.sort(
            (a, b) =>
                [...b].reduce((acc, cur) => acc + pirodo[cur][2], 0) -
                [...a].reduce((acc, cur) => acc + pirodo[cur][2], 0)
        );
    }

    function dfs(picks, minerals) {
        for (let i = 0; i < picks.length; i++) {
            if (picks[i] > 0) {
                picks[i]--;
                const mineral = minerals.shift();

                answer += calcScore(mineral, i);
                dfs(picks, minerals);
            }
        }
    }

    function calcScore(minerals, pick) {
        return minerals.reduce((acc, cur) => acc + pirodo[cur][pick], 0);
    }
}
