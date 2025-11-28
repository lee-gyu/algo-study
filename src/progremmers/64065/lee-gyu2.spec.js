import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu2", problemInfo, solution);

// 완전 함수형 파이프라인 스타일 풀이
// ---

function solution(s) {
    return [
        ...s
            .slice(2, s.length - 2)
            .split("},{")
            .map((tuple) => tuple.split(",").map(Number))
            .sort((a, b) => a.length - b.length)
            .reduce((set, tuple) => {
                tuple
                    .filter((value) => !set.has(value))
                    .forEach((val) => set.add(val));

                return set;
            }, new Set()),
    ];
}
