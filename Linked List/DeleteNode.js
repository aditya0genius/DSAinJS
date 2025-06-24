/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // delete the first element passed in node
    if (node === null || node.next === null) {
        return; // Cannot delete the node if it's null or the last node
    }       
    node.val = node.next.val; // Copy the value from the next node
    node.next = node.next.next; // Bypass the next node   
};