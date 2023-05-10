const containsDuplicate = function(numbers) {
   return [...new Set(numbers)].length !== numbers.length;
};