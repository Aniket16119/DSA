var maximumGap = function(nums) {
    let n = nums.length;

    if (n < 2) {
        return 0;
    }

    // Find minimum and maximum
    let min = nums[0];
    let max = nums[0];

    for (let num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    // If all numbers are same
    if (min === max) {
        return 0;
    }

    // Size of each bucket
    let bucketSize = Math.ceil((max - min) / (n - 1));

    // Number of buckets
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;

    // Store min and max for each bucket
    let bucketMin = new Array(bucketCount).fill(Infinity);
    let bucketMax = new Array(bucketCount).fill(-Infinity);

    // Put numbers into buckets
    for (let num of nums) {
        let index = Math.floor((num - min) / bucketSize);

        bucketMin[index] = Math.min(bucketMin[index], num);
        bucketMax[index] = Math.max(bucketMax[index], num);
    }

    // Find maximum gap
    let answer = 0;
    let previousMax = min;

    for (let i = 0; i < bucketCount; i++) {

        // Skip empty bucket
        if (bucketMin[i] === Infinity) {
            continue;
        }

        // Gap between previous bucket and current bucket
        answer = Math.max(
            answer,
            bucketMin[i] - previousMax
        );

        previousMax = bucketMax[i];
    }

    return answer;
};