export default function isArraySorted(array) {
   if (!Array.isArray(array)) throw Error('Argument must be an array.');

   for (let i = 0, length = array.length - 1; i < length; i++) {
      if (array[i] > array[i + 1]) return false;
   }

   return true;
}