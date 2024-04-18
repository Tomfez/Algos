/**
 * Trier une liste chaînée
 */
import { LinkedList, Node } from "./linked_list.mjs";

let ll = new LinkedList();
ll.addFirst("a");
ll.addFirst("f");
ll.addFirst("b");

function sortLinkedList(ll) {
    let current = ll.head;

    if (!current || !current.next) {
        return;
    }
    else {
        const sortedList = new LinkedList();

        // Ajout d'un premier élément dans la liste. Celui-ci servira de point de comparaison pour l'insert suivant.
        sortedList.addFirst(current.value);
        
        //Ensuite, nous sélectionnons le second élément de la liste à trier comme élément courant.
        current = current.next;

        // Itération sur la liste non triée
        while (current) {
            let sortedHead = sortedList.head;

            // Nous décalons le point d'insertion vers la droite tant que l'élément à insérer est supérieur à l'élément considéré dans la liste triée 
            while (sortedHead.next && sortedHead.next.value < current.value) {
                sortedHead = sortedHead.next;
            }

            // Si la tête de la liste a une valeur supérieure alors on déclare l'élément courant en tant que tête de liste
            if (sortedHead.value > current.value) {
                sortedList.head = new Node(current.value, sortedHead);
            }
            // Sinon on l'insert au point d'insertion
            else {
                sortedHead.next = new Node(current.value, sortedHead.next);
            }

            current = current.next;
        }

        ll.head = sortedList.head;
    }
}

ll.print();
sortLinkedList(ll);
ll.print();