/**
 * Inverser une liste chaînée
 */
import { LinkedList } from "./linked_list.mjs";

let ll = new LinkedList();
ll.addFirst("a");
ll.addFirst("f");
ll.addFirst("b");

function reverseList(ll) {
    let current = ll.head;

    if (!current || !current.next) {
        return;
    }
    else {
        let prev = null;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        ll.head = prev;
    }
}

function reverseList2(ll) {
    let current = ll.head;

    if (!current || !current.next) {
        return;
    }
    else {
        let newLL = new LinkedList();

        while (current) {
            newLL.addFirst(current.value);
            current = current.next;
        }
        ll.head = newLL.head;
    }
}

ll.print();
reverseList2(ll);
ll.print();
