class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * ismai huma best approch use kar rahi hai unsorted k liya ya sorted pai bhi kaam karage.
     */

    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i< nums.length;i++){
            const complement = target - nums[i];
            if(map.has(complement)){
            return [map.get(complement),i]
            }
            map.set(nums[i],i)
        }
    }
}
