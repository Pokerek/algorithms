/**
 * @param {number[]} numbers
 * @return {number[][]}
 */
const threeSum = function (numbers) {
   if (numbers.length < 3) return [];
   const answers = [];

   numbers.sort((a, b) => a - b);

   for (let i = 0; i < numbers.length - 2; i++) {
      if (i > 0 && numbers[i] === numbers[i - 1]) continue;

      let left = i + 1;
      let right = numbers.length - 1;

      while (left < right) {
         const result = numbers[i] + numbers[left] + numbers[right];
         if (result === 0) {
            answers.push([numbers[i], numbers[left], numbers[right]]);

            while (numbers[left] === numbers[left + 1]) {
               left++;
            }
            while (numbers[right] === numbers[right - 1]) {
               right--;
            }
            left++;
            right--;
         } else if (result > 0) {
            right--;
         } else {
            left++;
         }
      }
   }

   return answers;
};
