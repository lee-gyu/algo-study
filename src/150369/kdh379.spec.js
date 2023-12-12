import { problemInfo } from ".";
import { testRunner } from "../utils";

testRunner("kdh379", problemInfo, solution);

function solution(cap, n, deliveries, pickups) {
    let distance = 0;

    while (deliveries.length || pickups.length) {
        // 마지막 박스가 0이면 유효한 숫자가 나올 때 까지 지움
        removeTrailingZero(deliveries);
        removeTrailingZero(pickups);

        //한번은 최대 거리까지 가야 함
        // 둘 중 더 먼 거리를 합해주고 왕복이니까 *2
        distance += Math.max(deliveries.length, pickups.length) * 2;

        trackingParcel(deliveries);
        trackingParcel(pickups);
    }

    return distance;

    function trackingParcel(boxList) {
        // 먼 거리부터 delivery와 pickup을 cap에 최대한 담음
        let boxCount = 0;
        while (boxList.length) {
            const lastBox = boxList.pop();

            // cap을 넘어서면 마지막 거리에 남겨두고 옴
            if (boxCount + lastBox > cap) {
                boxList.push(boxCount + lastBox - cap);
                break;
            } else boxCount += lastBox;
        }

        return boxCount;
    }

    function removeTrailingZero(boxList) {
        while (boxList.length && boxList[boxList.length - 1] === 0)
            boxList.pop();
    }
}
