import { testRunner } from "../utils";
import { problemInfo } from ".";

testRunner("lee-gyu", problemInfo, solution);

// 1순위: 서비스 가입자
// 2순위: 판매액
// 이모티콘 할인율은 각각 적용
// 7개의 할인율 각각 4개씩 유저 총 100명

// id로 이모티콘 할인율 모두 표현
// 0: [10 10], 1: [20 10]
// 2: [30 10], 3: [40 10]
// 4: [10 20], 5: [20 20]
// 6: [30 20], 7: [40 20]
// 8: [10 30], 9: [20 30]
// 10: [30 30], 11: [40 30]
// 12: [10 40], 13: [20 40]
// 14: [30 40], 15: [40 40]

const DISCOUNT_RATES = [10, 20, 30, 40];

function solution(users, emoticons) {
    let result = [0, 0];

    const emoCases = Math.pow(4, emoticons.length);

    for (let i = 0; i < emoCases; ++i) {
        let numOfRegister = 0;
        let totalRevenue = 0;

        for (const [userRate, userCost] of users) {
            const amountOfEmoji = sumOfCosts(i, userRate);

            if (amountOfEmoji >= userCost) ++numOfRegister;
            else totalRevenue += amountOfEmoji;
        }

        if (
            // 1순위 가입자 수가 많다면
            numOfRegister > result[0] ||
            // 2순위 가입자 수는 같지만 매출 더 큰 것 우선
            (numOfRegister === result[0] && totalRevenue > result[1])
        )
            result = [numOfRegister, totalRevenue];
    }

    // 가장 이득인 값을 반환
    return result;

    function sumOfCosts(emoBit, userRate) {
        let sum = 0;
        // bit에 따른 할인율 구하기 (4씩 나누어 처리)
        for (const emo of emoticons) {
            const curRate = DISCOUNT_RATES[emoBit % 4];

            if (curRate >= userRate) sum += (emo * (100 - curRate)) / 100;

            // 정수 처리를 위해 | 0
            emoBit = (emoBit / 4) | 0;
        }

        return sum;
    }
}
