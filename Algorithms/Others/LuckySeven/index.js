import {add} from '../../../Utils/Calculator'

export default function luckySevens(array) {
   if (!Array.isArray(array)) throw Error('Argument must be an array.');

   for (let i = 1, length = array.length - 1; i < length; i++) {
      if (add(array[i - 1], array[i], array[i + 1]) === 7) return true;
   }

   return false;
}