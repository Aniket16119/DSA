/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newar = nums1.concat(nums2)
    newar.sort((a,b)=> a - b);
    let n = newar.length
    if(n % 2 === 0){
        return (newar[n/2 - 1] + newar[n/2]) / 2;
    }
    else{
        return newar[Math.floor(n/2)]
    }
};