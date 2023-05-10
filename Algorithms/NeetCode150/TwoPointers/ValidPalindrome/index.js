/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
   const string = s
      .toLowerCase()
      .split('')
      .filter((char) => isAlphanumeric(char))
      .join('');
   if (string.length === 0) return true;

   const half = Math.floor(string.length / 2);
   for (let i = 0; i < half; i++) {
      if (string.at(i) !== string.at(-1 - i)) return false;
   }

   return true;
};

const isAlphanumeric = (char) => {
   return (
      (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) ||
      (char.charCodeAt() >= 48) & (char.charCodeAt() <= 57)
   );
};
