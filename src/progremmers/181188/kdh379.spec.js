import { problemInfo } from ".";
import { testRunner } from "../../utils";

testRunner("kdh379", problemInfo, solution);

function solution(targets) {
    // targets을 end point 기준으로 정렬
    targets.sort((a, b) => a[1] - b[1]);

    return countFire();

    function countFire() {
        // 첫번째 타겟은 맞추고 시작
        let fireCount = 1;

        // 첫번째 타겟의 끝 지점을 기준으로 설정
        let targetEndPoint = targets[0][1];

        for (let i = 0; i < targets.length; i++) {
            const [startPoint, endPoint] = targets[i];

            // 개구간 (start, end) 에서 발사하는 미사일로는 요격 불가능
            // 따라서, startPoint가 targetEndPoint보다 크거나 같으면 하나 더 발사해야 함
            if (startPoint >= targetEndPoint) {
                targetEndPoint = endPoint;
                fireCount += 1;
            }
        }

        return fireCount;
    }
}
