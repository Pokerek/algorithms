export default function bubbleSort(array) {
   if(!Array.isArray(array)) throw Error('Argument must be an array.')

   let sorted = true;
   const sortedArray = [...array];
   for (let i = 0, length = sortedArray.length; i < length; i++) {
      for (let j = 1; j < length - i; j++) {
         if (sortedArray[j] < sortedArray[j - 1]) {
            let temp = sortedArray[j];
            sortedArray[j] = sortedArray[j - 1];
            sortedArray[j - 1] = temp;
            sorted = false;
         }
      }

      if (sorted) return sortedArray;
   }

   return sortedArray;
}