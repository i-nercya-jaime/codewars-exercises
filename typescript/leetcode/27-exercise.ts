function removeElement(nums: number[], val: number): number {

    var zeroStartIdx: number = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    return zeroStartIdx; 

}

console.log(removeElement([1, 1, 3, 3, 5, 7], 3))