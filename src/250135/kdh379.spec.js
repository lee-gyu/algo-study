import { problemInfo } from ".";
import { testRunner } from "../utils";

testRunner("kdh379", problemInfo, solution);

/*

하루 기준
1분 = 초침 한바퀴 = 2번 만남
하루 = 1440분 = 2880번
59분 -> 00분 때 분침 초침은 안만남 = -24
11시 59분 -> 12시, 23시 59분 > 00시 갈 때 시침/분침은 초침과 안만남 = -2

 */
function solution(h1, m1, s1, h2, m2, s2) {
    let acrossCount =
        getAcrossCountFromMidnight(h2, m2, s2) -
        getAcrossCountFromMidnight(h1, m1, s1);

    // h1:m1:s1이 0시0분0초 or 12시0분0초인 경우 1을 갖고 시작하므로 예외처리
    if ((h1 === 0 || h1 === 12) && m1 === 0 && s1 === 0) ++acrossCount;

    return acrossCount;

    // 00:00:00 ~ h:m:s 까지 겹치는 횟수
    function getAcrossCountFromMidnight(h, m, s) {
        let acrossCount = -1; // 0시 0분 0초는 카운트를 하나로만 세야해서 -1로 시작

        // 마지막 시침, 분침, 초침 각도 계산
        const hDegree = (h * 30 + m * 0.5 + (s * 0.5) / 60) % 360;
        const mDegree = m * 6 + s * (6 / 60);
        const sDegree = s * 6;
        // 마지막 초침의 각도 계산
        if (sDegree >= hDegree) acrossCount += 1;
        if (sDegree >= mDegree) acrossCount += 1;

        const mCount = h * 60 + m;
        acrossCount += mCount * 2; // 분당 2번씩 겹침
        acrossCount -= h; // 59분 -> 00분 때 분침 초침은 안만남
        if (h >= 12) acrossCount -= 2; // 11시 59분 59초 -> 12시인 경우 시침/분침은 초침과 안만남 = -2

        return acrossCount;
    }
}
