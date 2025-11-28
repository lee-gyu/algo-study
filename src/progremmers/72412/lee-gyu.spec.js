import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

// lang: cpp java python
// position: backend frontend
// career: junior senior
// soulFood: chicken pizza
// -인 경우 해당 조건 고려하지 않음
// query는 [개발언어] and [직군] and [경력] and [소울푸드] (" and "으로 구분)

// info 최대 50,000
// query 최대 100,000
// 50,000 * 100,000 = 5,000,000,000인 경우 시간 초과
// info를 효율적인 자료구조를 처리하는 것이 중요

// 계층 별 SortedTreeList 구현하여 바이너리 서치로 개수 구하기
// java.backend.junior.pizza = []
// cpp.backend.junior.chicken = []

// 다른 풀이를 참고해봤는데, mask를 써서 사용한 풀이가 있었음
// cpp, java, python을 1글자 씩만 써도 문제는 없었을 듯

// ---

const TREE_LEVEL_LIST = [
    ["cpp", "java", "python", "-"],
    ["backend", "frontend", "-"],
    ["junior", "senior", "-"],
    ["chicken", "pizza", "-"],
];

const LAST_DEPTH = TREE_LEVEL_LIST.length - 1;

function solution(infoList, query) {
    const treeList = initTreeList({}, 0);

    initInfoList();

    return query.map((q) => getQueryResult(q));

    // 50,000 * 24 (최악) + NlogN (sorting)
    function initInfoList() {
        infoList.forEach((info) => {
            const [lang, position, career, soulFood, score] = info.split(" ");
            const scoreNum = Number(score);

            treeList[lang][position][career][soulFood].push(scoreNum);

            treeList["-"][position][career][soulFood].push(scoreNum);
            treeList[lang]["-"][career][soulFood].push(scoreNum);
            treeList[lang][position]["-"][soulFood].push(scoreNum);
            treeList[lang][position][career]["-"].push(scoreNum);
            treeList["-"]["-"][career][soulFood].push(scoreNum);
            treeList["-"][position]["-"][soulFood].push(scoreNum);
            treeList["-"][position][career]["-"].push(scoreNum);
            treeList[lang]["-"]["-"][soulFood].push(scoreNum);
            treeList[lang]["-"][career]["-"].push(scoreNum);
            treeList[lang][position]["-"]["-"].push(scoreNum);
            treeList["-"]["-"]["-"][soulFood].push(scoreNum);
            treeList["-"]["-"][career]["-"].push(scoreNum);
            treeList["-"][position]["-"]["-"].push(scoreNum);
            treeList[lang]["-"]["-"]["-"].push(scoreNum);
            treeList["-"]["-"]["-"]["-"].push(scoreNum);
        });

        // sorting
        sortTreeList(treeList, 0);
    }

    function sortTreeList(obj, level) {
        for (const key of TREE_LEVEL_LIST[level]) {
            if (level < LAST_DEPTH) sortTreeList(obj[key], level + 1);
            else obj[key].sort((a, b) => a - b);
        }
    }

    function initTreeList(obj, level) {
        for (const key of TREE_LEVEL_LIST[level]) {
            if (level < LAST_DEPTH) {
                obj[key] = {};
                initTreeList(obj[key], level + 1);
            } else {
                obj[key] = [];
            }
        }

        return obj;
    }

    function getQueryResult(q) {
        const [lang, , position, , career, , soulFood, score] = q.split(" ");
        const ary = treeList[lang][position][career][soulFood];

        // binary search 현재 score 배열의 경계 찾기
        let start = 0;
        let end = ary.length;

        while (start < end) {
            const cur = Math.floor((end + start) / 2);
            const curScore = ary[cur];

            if (score <= curScore) end = cur;
            else start = cur + 1;
        }

        return ary.length - Math.floor((end + start) / 2);
    }
}
