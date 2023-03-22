import isArraySorted from "../../../Utils/isArraySorted";

export default function binarySearch(value, array) {
   if (!Array.isArray(array)) throw Error('Second argument must be an array.');
   if (!value && !array) throw Error('You need two arguments value and array.');
   if (isArraySorted(array) === false) throw Error('Array must be sorted!');

   let length = Math.floor(array.length / 2);
   let index = Math.floor(length);
   do {
      if (array[index] === value) return index;

      length = Math.floor(length / 2);

      if (array[index] > value) index = length;

      if (array[index] < value) index += length;


   } while (length);
      
   return -1;
}