import { problemInfo } from ".";
import { testRunner } from "../../utils";

testRunner("kdh379", problemInfo, solution);

function solution(picks, minerals) {
    const diaPick = {
        diamond: 1,
        iron: 1,
        stone: 1,
    };
    const ironPick = {
        diamond: 5,
        iron: 1,
        stone: 1,
    };
    const stonePick = {
        diamond: 25,
        iron: 5,
        stone: 1,
    };

    // minerals를 picks수 만큼 5개씩 묶음
    const picksLen = picks[0] + picks[1] + picks[2];
    const mineralsGroup = [];
    for (let i = 0; i < picksLen; i++) {
        mineralsGroup.push(minerals.splice(0, 5));
    }

    // mineralsGroup을 stonePick 점수에 맞춰서 정렬
    const sortedMinerals = mineralsGroup.sort(
        (a, b) =>
            [...b].reduce((acc, cur) => acc + stonePick[cur], 0) -
            [...a].reduce((acc, cur) => acc + stonePick[cur], 0)
    );

    // picks에 따라서 sortedMinerals에서 뽑아서 점수 계산
    let result = 0;

    sortedMinerals.forEach((minerals) => {
        const pick = getPick();
        if (!pick) return;

        result += minerals.reduce((acc, cur) => acc + pick[cur], 0);
    });

    return result;

    function getPick() {
        const [dia, iron, stone] = picks;

        if (dia > 0) {
            picks[0] -= 1;
            return diaPick;
        }
        if (iron > 0) {
            picks[1] -= 1;
            return ironPick;
        }
        if (stone > 0) {
            picks[2] -= 1;
            return stonePick;
        }
    }
}
