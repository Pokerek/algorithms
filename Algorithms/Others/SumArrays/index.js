export default function sumArrays(array) {
   if (!Array.isArray(array)) throw Error('Argument must be an array.')

   let total = 0;
   
   for (let i = 0, length = array.length; i < length; i++) {
      const actual = array[i];
      if (Array.isArray(actual)) {
         total += sumArrays(actual);
         continue;
      }
      
      if (isNaN(actual)) throw Error('Array should only contains numbers.');
      total += actual;
   }

   return total;
}