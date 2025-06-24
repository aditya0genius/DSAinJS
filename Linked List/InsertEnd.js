/**
 * @param {Node} head
 * @param {number} newData
 * @returns {Node}

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    insertAtEnd(head, x) {
        // code here
        const newNode = new Node(x);
        let itr = head;
        if (itr === null) {
        return newNode;
        }
    
        while(itr.next !=null){
            
            itr=itr.next;
            
        }
        
        itr.next = newNode;
        
        let val=head
        while(head !=null){
            return head;
            head=head.next;
            
        }
        
        
    }
}