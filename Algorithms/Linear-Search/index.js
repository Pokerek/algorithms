export function linearSearch(value, array) {
   if (!Array.isArray(array)) throw Error('Second argument must be an array.');
   if (!value && !array) throw Error('You need two arguments value and array.');

   
   const length = array.length;
   for (let i = 0; i < length; i++) {
      if (array[i] === value) {
         return i;
      }
   }

   return -1;
}