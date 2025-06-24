/**
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to count nodes of a linked list.
    getCount(head) {
        // Code here
        let itr = head;
        let count=0;
        if (itr === null) {
        return count;
        }
    
        while(itr !=null){
            itr=itr.next;
            count+=1;
        }
        return count;
    }
}