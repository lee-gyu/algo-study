import { problemInfo } from ".";
import { testRunner } from "../../utils";

testRunner("kdh379", problemInfo, solution);

function solution(plans) {
    // plans 정렬
    const sortedPlans = plans
        .map(([name, start, playtime]) => [
            name,
            convertTime(start),
            Number(playtime),
        ])
        .sort((a, b) => b[1] - a[1]);

    // [이름, 종료 시간]
    const stack = [];

    while (sortedPlans.length) {
        const [name, start, playtime] = sortedPlans.pop();

        // start + playtime이 다음 plan의 start보다 큰 경우 playtime만큼 종료 시간이 늦어짐
        stack.forEach((plan, index) => {
            if (start < plan[1]) stack[index][1] += playtime;
        });

        stack.push([name, start + playtime]);
    }

    // 종료 시간 순으로 정렬 뒤 name 반환
    return stack.sort((a, b) => a[1] - b[1]).map(([name]) => name);

    function convertTime(time) {
        const [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute;
    }
}
