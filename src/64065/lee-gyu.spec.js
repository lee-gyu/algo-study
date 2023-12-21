import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

//
// ---

function solution(s) {
    // {{, }} 제거 후 },{ 으로 split 및 tuple 길이 순 정렬
    const filteredTupleList = s
        .slice(2, s.length - 2)
        .split("},{")
        .map((tuple) => tuple.split(","))
        .sort((a, b) => a.length - b.length);

    const ret = [];
    const dict = {};

    // 순회하면서 중복 없이 순차적으로 리스트에 추가
    for (const tuple of filteredTupleList) {
        tuple.forEach((value) => {
            if (!dict[value]) {
                dict[value] = true;
                ret.push(Number(value));
            }
        });
    }

    return ret;
}
