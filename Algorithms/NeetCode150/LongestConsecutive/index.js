/**
 * @param {number[]} numbers
 * @return {number}
 */
const longestConsecutive = function (numbers) {
   if (numbers.length < 2) return numbers.length;

   const sortedNumbers = [...new Set(numbers.sort((a, b) => a - b))];
   let max = 1;
   let current = 1;

   for (let i = 1; i < sortedNumbers.length; i++) {
      if (sortedNumbers[i] - sortedNumbers[i - 1] === 1) {
         current++;
      } else {
         max = Math.max(max, current);
         current = 1;
      }
   }

   return Math.max(max, current);
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
