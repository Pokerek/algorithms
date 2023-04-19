/**
 * @param {number[]} numbers
 * @return {number[]}
 */
const productExceptSelf = function (numbers) {
   const length = numbers.length;
   const output = Array(length).fill(1);
   let left = 1;
   let right = 1;

   for (let i = 0; i < length; i++) {
      output[i] *= left;
      left *= numbers[i];
      output[length - 1 - i] *= right;
      right *= numbers[length - 1 - i];
   }
   return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
