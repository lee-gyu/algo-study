import { testRunner } from "@utils";
import { problemInfo } from "./index";

testRunner("lee-gyu", problemInfo, solution);

// 깊이가 최대 17이 되므로, 최대 노드 수 2^17 = 131072
// 양 0
// 늑대 1
// 늑대 수가 같거나 더 많으면 늑대가 이김
// 최대한 확보 가능한 양의 수는?
// 우선순위 큐를 사용하여 BFS 탐색
// 먼저 트리 구조로 양, 늑대를 처리하고, rootNode를 queue넣어 탐색 시작
// 부모 노드에서 현재 가지고 있는 양 카운트를 가지고 있게 해서, 불필요한 탐색을 줄이기
// 늑대를 가지고 올 때, 늑대 밖에 없다면 가져올 필요가 없다.

class BinaryTree {
    rootNode;
    nodeList;
    constructor(rootNode, nodeList) {
        this.rootNode = rootNode;
        this.nodeList = nodeList;
    }

    setEdges(edges) {
        for (const [parent, child] of edges)
            this.nodeList[parent].addChild(this.nodeList[child]);

        this.rootNode.init();
    }

    pushWolfItemIntoQueue(queue, wolfNode) {
        for (let index = 0; index < queue.length; ++index) {
            const item = queue[index];

            if (
                wolfNode.nearSheepLevelDiff < item.nearSheepLevelDiff ||
                (wolfNode.nearSheepLevelDiff === item.nearSheepLevelDiff &&
                    wolfNode.sheepCount > item.sheepCount)
            ) {
                queue.splice(index, 0, wolfNode);
                return;
            }
        }

        // 우선 순위가 같으면 그냥 맨 뒤에 추가
        queue.push(wolfNode);
    }

    getMaxSheepCount() {
        // rootNode부터 출발 (무조건 1 카운트)
        let sheepCount = 0;
        let wolvesCount = 0;
        const sheepStack = [this.rootNode];
        const wolfQueue = [];

        while (sheepStack.length || wolfQueue.length) {
            // 양이 있다면 양을 우선으로 처리
            if (sheepStack.length) {
                const sheepPop = sheepStack.pop();

                ++sheepCount;
                for (const node of sheepPop.children) {
                    // 양인 경우 양 스택에 추가 (양 스택이 있다면 무조건 다 소진하고 wolf 스택을 순회)
                    if (node.type === 0) sheepStack.push(node);
                    // 양을 포함하는 노드만 추가
                    // 양과 가장 가까운 늑대를 우선으로 queue 정렬
                    else if (node.nearSheepLevelDiff !== 9999)
                        this.pushWolfItemIntoQueue(wolfQueue, node);
                }

                continue;
            }

            // 늑대를 더 추가할 수 없는 상황이면 break
            if (wolvesCount + 1 === sheepCount) break;

            if (wolfQueue.length) {
                const wolfFront = wolfQueue.shift();

                ++wolvesCount;

                for (const node of wolfFront.children) {
                    if (node.type === 0) sheepStack.push(node);
                    else if (node.nearSheepLevelDiff !== 9999)
                        this.pushWolfItemIntoQueue(wolfQueue, node);
                }
            }
        }

        return sheepCount;
    }
}

class Node {
    children = [];

    id;
    type;
    // 가장 가까운 양 노드 거리
    nearSheepLevelDiff = 9999;
    sheepCount = 0;

    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    addChild(child) {
        this.children.push(child);

        // 바로 자식이 양이면 거리 1 설정
        if (child.type === 0) {
            this.nearSheepLevelDiff = 1;
            ++this.sheepCount;
        }
    }

    init() {
        this.children.forEach((child) => {
            child.init();
            this.sheepCount += child.sheepCount;

            if (child.nearSheepLevelDiff !== 9999)
                this.nearSheepLevelDiff = Math.min(
                    this.nearSheepLevelDiff,
                    child.nearSheepLevelDiff + 1
                );
        });

        return this.nearSheepLevelDiff;
    }
}

function solution(info, edges) {
    const nodeList = info.map((type, id) => new Node(id, type));
    const bTree = new BinaryTree(nodeList[0], nodeList);

    bTree.setEdges(edges);

    return bTree.getMaxSheepCount();
}
