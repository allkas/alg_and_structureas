const graph = {};

graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

const shortPath = (graph, start, end) => {
    const costs = {}; // кратшайшие пути хранятся тут
    const proccessed = []; // проверенные узлы
    let neighbors = {}; // сосудние вершины рассматриваемого узла

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 1000000000
        }
    })
    let node = findNodeLowestCost(costs, proccessed);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = costs + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }

        })
        proccessed.push(node);
        node = findNodeLowestCost(costs, proccessed);
    }

    return costs;
}

const findNodeLowestCost = (costs, processed) => {
    let lowerCost = 100000000;
    let lowestNode;

    Object.keys(costs).forEach(node => {
        let cost = costs[node];
        if (cost < lowerCost && !processed.includes(node)) {
            lowerCost = cost;
            lowestNode = node;
        }
    })
}

console.log(shortPath(graph, "a", "g"));