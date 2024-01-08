import { problemInfo } from ".";
import { testRunner } from "../utils";

testRunner("kdh379", problemInfo, solution);

function solution(cap, n, deliveries, pickups) {
    let distance = 0;

    while (deliveries.length || pickups.length) {
        // 둘 중 더 멀리 있는 곳을 한번은 가야만 함
        // 끝이 0인 값은 제거
        removeTrailingZero(deliveries);
        removeTrailingZero(pickups);

        // 거리 계산
        distance += Math.max(deliveries.length, pickups.length) * 2;

        trackingBox(deliveries);
        trackingBox(pickups);
    }

    return distance;

    function trackingBox(boxList) {
        let boxCount = 0;

        while (boxList.length) {
            const lastBox = boxList.pop();

            if (boxCount + lastBox > cap) {
                boxList.push(boxCount + lastBox - cap);
                break;
            } else boxCount += lastBox;
        }
    }

    function removeTrailingZero(boxList) {
        while (boxList.length && boxList.at(-1) === 0) boxList.pop();
    }
}
