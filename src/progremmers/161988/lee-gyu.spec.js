import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

/**
 * 1, -1, 1, -1, ...
 * -1, 1, -1, 1, ...
 * 2개의 시퀀스를 돌려서 최대값 구하기
 * 항상 시퀀스가 커지는 경우의 패턴을 찾아서 연산
 * 현재 값과 다음 값을 비교하여 현재 값이 다음 값보다 적어지는 경우
 */

// ---

class Pattern {
    sign;
    seq;
    start = 0;
    end = 0;
    index = 0;
    max = 0;
    stacked = 0;

    constructor(sign, seq) {
        this.sign = sign;
        this.seq = seq;
    }

    next() {
        const curNum = this.seq[this.index] * this.sign;
        const nextNum = (this.seq[this.index + 1] ?? 0) * (this.sign * -1);
        const curVal = this.stacked + curNum;
        const nextVal = curVal + nextNum;

        // 우선순위1. nextNum이 제일 큰 경우, index, stack 리셋
        if (nextNum > curVal && nextNum > nextVal) {
            this.start = this.index + 1;
            this.end = this.index + 1;
            this.stacked = 0;
        }
        // 우선순위2. nextVal curVal보다 커질 경우 포함
        // 우선순위3. curVal이 val보다 큰 경우 포함
        else if (nextVal > curVal || curVal > this.max) {
            this.end = this.index + 1;
            this.stacked += curNum;
            this.max = Math.max(this.max, this.stacked);
        } else {
            // stacked 값만 누적 시키기
            this.stacked += curNum;
        }

        this.sign *= -1;
        ++this.index;
    }
}

function solution(sequence) {
    const patternList = [new Pattern(-1, sequence), new Pattern(1, sequence)];

    for (let i = 0; i < sequence.length; ++i)
        patternList.forEach((p) => p.next());

    return patternList.reduce((max, p) => Math.max(max, p.max), 0);
}
