import { testRunner } from "../../utils";
import { problemInfo } from ".";

testRunner("lee-gyu2", problemInfo, solution);

/**
generator

테스트 1 〉	통과 (0.44ms, 33.5MB)
테스트 2 〉	통과 (0.47ms, 33.4MB)
테스트 3 〉	통과 (0.81ms, 33.7MB)
테스트 4 〉	통과 (2.67ms, 36.4MB)
테스트 5 〉	통과 (21.05ms, 37.4MB)
테스트 6 〉	통과 (17.39ms, 37.1MB)
테스트 7 〉	통과 (30.57ms, 38.2MB)
테스트 8 〉	통과 (12.20ms, 37.3MB)
테스트 9 〉	통과 (39.86ms, 37.1MB)
테스트 10 〉	통과 (37.94ms, 38.4MB)
테스트 11 〉	통과 (190.08ms, 38.4MB)
테스트 12 〉	통과 (98.10ms, 37.3MB)
테스트 13 〉	통과 (738.31ms, 38.6MB)
테스트 14 〉	통과 (610.81ms, 38.6MB)
테스트 15 〉	통과 (43.97ms, 37.2MB)
테스트 16 〉	통과 (36.16ms, 37.1MB)
테스트 17 〉	통과 (0.79ms, 33.7MB)
테스트 18 〉	통과 (24.91ms, 37.3MB)
테스트 19 〉	통과 (0.44ms, 33.5MB)
테스트 20 〉	통과 (0.72ms, 33.5MB)
 */

// for문을 const of로 변경하면서, 함수 콜이 늘었고,
// generator를 사용하면서, 함수 콜이 더 늘었음
// 결과적으로는 성능이 이전에 비해서 느려짐 (for index 문이 성능이 더 좋다.)

// js generator 활용 풀이
const DISCOUNT_RATES = [10, 20, 30, 40];

function solution(users, emoticons) {
    let result = [0, 0];
    // 미리 각 가격의 할인된 가격을 선 계산하여 계산 결과 캐시 (계산 중복 제거)
    const dict = initPriceMap();

    for (const emoRateCase of caseGenerator(emoticons.length)) {
        const curResult = [0, 0];

        for (const [userRate, userLimit] of users) {
            const amount = getCaseResult(userRate, emoRateCase);

            // 유저 제한 금액보다 높으면 구독
            if (amount >= userLimit) {
                ++curResult[0];
            } else curResult[1] += amount;
        }

        if (
            curResult[0] > result[0] ||
            (curResult[0] === result[0] && curResult[1] > result[1])
        )
            result = curResult;
    }

    // 가장 이득인 값을 반환
    return result;

    function initPriceMap() {
        // 마치 암호 같은 reduce 문
        // 각 emo의 금액의 각 10, 20, 30, 40 할인 가격을 캐시
        return emoticons.reduce((dict, emo, i) => {
            DISCOUNT_RATES.forEach(
                (rate) => (dict[`${i}_${rate}`] = (emo * (100 - rate)) / 100)
            );

            return dict;
        }, {});
    }

    function getCaseResult(userRate, emoRateCase) {
        let amount = 0;

        for (let i = 0; i < emoticons.length; i++) {
            const emoRate = emoRateCase[i];

            // 현재 user의 구매 비용 반환
            if (emoRate >= userRate) amount += dict[`${i}_${emoRate}`];
        }
        // 현재 emoRateCase 따른 user의 구매 비용 반환
        return amount;
    }

    // 현재 user만큼 case 생성

    function* caseGenerator(length) {
        const cases = Math.pow(4, emoticons.length);
        const emoDigitLen = emoticons.length - 1;
        const rates = Array.from({ length }, () => 10);

        // 기본 값 yield
        yield rates;

        for (let i = 1; i < cases; i++) {
            // case에 따라 rate id 변경
            rates[0] += 10;

            // rates[0] ~ length - 1까지 4가 되면 다음 자릿 수 올림
            for (let j = 0; j < emoDigitLen; j++) {
                if (rates[j] > 40) {
                    rates[j] = 10;
                    rates[j + 1] += 10;
                }
                // 자릿수 올림 없으면 break
                else break;
            }

            yield rates;
        }
    }
}
