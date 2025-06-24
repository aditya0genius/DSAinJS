// User function Template for javascript

/**
 * Node of a linked list
 * class Node {
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} n
     * @param {Node} head
     * @param {number} key
     * @returns {boolean}
     */
    searchKey(n, head, key) {
        // Code here
        let itr = head;
        
        while ( itr!=null ) {
            if(itr.data===key){
                return true;
            }
            itr = itr.next
        }
        return false;
    }
}