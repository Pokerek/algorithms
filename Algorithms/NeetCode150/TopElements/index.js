const topKFrequent = function (numbers, k) {
   const total = new Map();
   numbers.forEach((num) => {
      if (total.has(num)) {
         const value = total.get(num);
         total.set(num, value + 1);
      } else {
         total.set(num, 1);
      }
   });

   return [...new Map([...total].sort((a, b) => a[1] - b[1]).slice(-k)).keys()];
};
