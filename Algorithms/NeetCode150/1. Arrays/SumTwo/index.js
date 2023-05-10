const twoSum = function(numbers, target) {

   for (let i = 0; i < numbers.length; i++) {
      const nextNumberIndex = numbers.indexOf(target - numbers[i]);
       if(nextNumberIndex > -1) {
           return [i,nextNumberIndex];
       }
   }
   
};