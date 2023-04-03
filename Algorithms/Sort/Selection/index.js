export default function selectionSort(array) {
   if(!Array.isArray(array)) throw Error('Argument must be an array.')
   
   const sortedArray = [...array];
   for (let i = 0, length = sortedArray.length; i < length; i++) {
      let index = i;
      for (let j = i + 1 ; j < length; j++) {
         if (sortedArray[j] < sortedArray[index]) {
            index = j;
         }
      }
      if (index !== i) { 
         let temp = sortedArray[i];
         sortedArray[i] = sortedArray[index];
         sortedArray[index] = temp;
      }
   }

   return sortedArray;
}