import { testRunner } from "../utils";
import { problemInfo } from ".";

testRunner("kdh379", problemInfo, solution);

const DISCOUNT_RATES = [10, 20, 30, 40];

// 최대 users: 100
// 최대 emoticons: 7
// 할인율은 4종류

// emoticons에 모든 할인율 경우의 수를 다 하면 4^7 = 16384
// 16384 * 7 * 100 = 11468800
// 모든 경우의 수를 다 해도 1100만번이니까 모든 경우의 수 탐색으로 풀이
// 그래도 낮은 할인율부터 적용하면서 탐색하면 더 빠를 것 같음

function solution(users, emoticons) {
    const answer = [0, 0];
    const discountKind = [];
    const emoticonsLength = emoticons.length;

    dfs(0);

    return answer;

    function dfs(index) {
        if (index === emoticonsLength) {
            const [signCount, cost] = calculateCost();
            console.log(discountKind, signCount, cost);
            // 가입자 수가 더 많거나, 가입자 수가 같은데 총 비용이 더 많으면 갱신
            if (
                signCount > answer[0] ||
                (signCount === answer[0] && cost > answer[1])
            ) {
                answer[0] = signCount;
                answer[1] = cost;
            }
            return;
        }

        // 할인 종류별로 경우의 수를 다 해봄
        for (let i = 0; i < 4; i++) {
            discountKind[index] = i;
            dfs(index + 1);
        }
    }

    function calculateCost() {
        let signCount = 0;
        let cost = 0;

        for (const user of users) {
            const [buyCriteria, signCriteria] = user;

            const totalCost = emoticons.reduce((acc, emoticon, index) => {
                const discountRate = DISCOUNT_RATES[discountKind[index]];
                const discountCost = (emoticon * (100 - discountRate)) / 100;

                // 할인율이 구매 기준을 넘어가면 할인율을 적용한 가격을 더해줌
                if (buyCriteria <= discountRate) {
                    return (acc += discountCost);
                }
                return acc;
            }, 0);

            // 총 구매 가격이 signCriteria를 넘어가면 signCount를 더해주고, 나머지 다 환불
            if (totalCost >= signCriteria) signCount++;
            else cost += totalCost;
        }

        return [signCount, cost];
    }
}
