/**
 * Listes chaînées
 */
export class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    addLast(value) {
        let current = this.head;
        if (!current) {
            this.head = new Node(value);
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
        this.size++;
    }

    add(position, value) {
        if (position < 0 || position > this.size) {
            throw new Error('Index en dehors des limites');
        } else if (position === 0) {
            this.head = new Node(value, this.head);
        } else {
            let current = this.head;
            while (position - 1) {
                current = current.next;
                position--;
            }
            current.next = new Node(value, current.next);
        }
        this.size++;
    }

    removeFirst() {
        let current = this.head;

        if (!current) {
            return null;
        }
        else {
            this.head = current.next;
            this.size--;
            return current.value;
        }
    }

    removeLast() {
        let current = this.head;

        if (!current) {
            return null;
        } else if (!current.next) {
            this.head = null;
            this.size--;
            return current.value;
        }
        else {
            while (current.next.next) {
                current = current.next;
            }

            const lastNode = current.next;
            current.next = null;
            this.size--;
            return lastNode.value;
        }
    }

    remove(position) {
        if (position < 0 || position > this.size - 1) {
            throw new Error('Index en dehors des limites');
        }
        else if (position === 0) {
            return this.removeFirst();
        }
        else {
            let current = this.head;
            while (position - 1) {
                current = current.next;
                position--;
            }

            const nodeValue = current.next.value;
            current.next = current.next.next;
            this.size--;
            return nodeValue;
        }
    }

    contains(valeur) {
        let current = this.head;

        while (current) {
            if (Object.is(valeur, current.value)) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    get(position) {
        if (position < 0 || position > this.size - 1) {
            return null;
        }
        else {
            let current = this.head;

            while (position) {
                current = current.next;
                position--;
            }

            return current;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }
        console.log(null);
    }
}

// const linkedlist = new LinkedList();

// linkedlist.addFirst("a");
// linkedlist.print();

// linkedlist.addFirst("b");
// linkedlist.addFirst("c");
// linkedlist.print();

// linkedlist.addLast("z");
// linkedlist.print();

// let res = linkedlist.get(1);
// console.log(res);

// linkedlist.removeFirst();
// linkedlist.print();

// linkedlist.removeLast();
// linkedlist.print();

// linkedlist.remove(1);
// linkedlist.print();