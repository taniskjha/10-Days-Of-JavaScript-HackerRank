function getSecondLargest(nums) {
    
    var firstlargest = Math.max(...nums);

    // for (var i=0; i < nums.length; i++) {
    //     if (nums[i] == firstlargest) {
    //         nums.splice(i,1)
    //     }
    // }

    var filty = nums.filter(a => a !== firstlargest)

    return Math.max(...nums);
  
   }  getSecondLargest([2,3,6,6,5])
   