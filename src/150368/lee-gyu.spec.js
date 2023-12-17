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

/**
테스트 1 〉	통과 (0.24ms, 33.4MB)
테스트 2 〉	통과 (0.31ms, 33.4MB)
테스트 3 〉	통과 (0.75ms, 33.8MB)
테스트 4 〉	통과 (3.00ms, 37.6MB)
테스트 5 〉	통과 (11.20ms, 38.1MB)
테스트 6 〉	통과 (22.35ms, 37.2MB)
테스트 7 〉	통과 (29.89ms, 38.2MB)
테스트 8 〉	통과 (11.37ms, 37.9MB)
테스트 9 〉	통과 (13.71ms, 38.1MB)
테스트 10 〉	통과 (11.44ms, 38.1MB)
테스트 11 〉	통과 (31.27ms, 38.1MB)
테스트 12 〉	통과 (17.93ms, 38.1MB)
테스트 13 〉	통과 (93.88ms, 38.1MB)
테스트 14 〉	통과 (91.94ms, 38.1MB)
테스트 15 〉	통과 (30.65ms, 38.3MB)
테스트 16 〉	통과 (14.14ms, 38MB)
테스트 17 〉	통과 (0.66ms, 33.7MB)
테스트 18 〉	통과 (10.62ms, 38.1MB)
테스트 19 〉	통과 (0.26ms, 33.5MB)
테스트 20 〉	통과 (0.26ms, 33.4MB)
 */

const DISCOUNT_RATES = [10, 20, 30, 40];

function solution(users, emoticons) {
    let result = [0, 0];

    const emoCases = Math.pow(4, emoticons.length);

    for (let i = 0; i < emoCases; ++i) {
        let numOfRegister = 0;
        let totalRevenue = 0;

        for (const [userRate, userCost] of users) {
            const userAmount = sumOfCosts(i, userRate);

            if (userAmount >= userCost) ++numOfRegister;
            else totalRevenue += userAmount;
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
