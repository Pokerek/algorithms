/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
   if (numbers.length === 2) return [1, 2];

   const unique = [...new Set(numbers)];
   for (let i = 0; i < unique.length; i++) {
      const actual = unique[i];
      const rest = target - actual;
      if (rest === actual) {
         const index = numbers.indexOf(actual);
         return [index + 1, index + 2];
      }

      const secondIndex = unique.slice(i + 1).indexOf(rest);
      if (secondIndex !== -1) {
         return [
            numbers.indexOf(actual) + 1,
            numbers.slice().indexOf(rest) + 1
         ];
      }
   }
};
