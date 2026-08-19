class Solution {
    public int repeatedNTimes(int[] nums) {
        int j = 1;
        Arrays.sort(nums);
         for(int i = 0 ; i <nums.length ; i ++){
            if(nums[i] == nums[j]){
                return nums[j]; 
            }
            else{j++;}
         }
    return 0;}
}