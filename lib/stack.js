// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let temp = new Node(value);
        if (!this.top) {
            this.top = temp;
        } else {
            let top = this.top;
            this.top = temp;
            this.top.next = top;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        } else {
            let oldTop = this.top;
            this.top = oldTop.next;
            this.length--;
            return oldTop.value;
        }
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
