function searchInsert(nums: number[], target: number): number {
    let start: number = 0;
    let end: number = nums.length - 1;

    while (start <= end) {
        const mid: number = Math.floor((start + end) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
};