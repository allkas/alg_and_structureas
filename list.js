class linkedList {
    constructor() {
        this.size = 0;
        this.root = 0;
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root;
        while (node.next) {
            node = node.next;
        }
        let newNode = new Node(value);
        node.next = newNode;
        this.size += 1;
    }
    getSize() {
        return this.size;
    }
    print() {
        let result = [];
        let node = this.root;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        console.log(result);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let list = new linkedList();
list.add(5);
list.add(6);
list.add(7);
list.add(3);
list.print();