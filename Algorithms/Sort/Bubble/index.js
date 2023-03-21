export default function bubbleSort(array) {
   if(!Array.isArray(array)) throw Error('Argument must be an array.')


   const sortedArray = [...array];
   for (let i = 0, length = sortedArray.length; i < length; i++) {
      for (let j = 1; j < length; j++) {
         if (sortedArray[j] < sortedArray[j - 1]) {
            let temp = sortedArray[j];
            sortedArray[j] = sortedArray[j - 1];
            sortedArray[j - 1] = temp;
         }
      }
   }

   return sortedArray;
}