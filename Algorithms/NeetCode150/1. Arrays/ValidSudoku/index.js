/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
   // check rows
   for (let i = 0; i < 9; i++) {
      if (!isValidPart(board[i])) {
         return false;
      }
   }

   // check columns
   for (let i = 0; i < 9; i++) {
      const column = [];
      for (let j = 0; j < 9; j++) {
         column.push(board[j][i]);
      }
      if (!isValidPart(column)) {
         return false;
      }
   }

   // check squares
   for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
         const square = [];
         for (let k = i; k < i + 3; k++) {
            for (let l = j; l < j + 3; l++) {
               square.push(board[k][l]);
            }
         }
         if (!isValidPart(square)) {
            return false;
         }
      }
   }
};

const isValidPart = function (part) {
   const numbers = part.filter((item) => item !== '.');
   const set = new Set(part);
   return set.size - numbers.length === 1;
};

console.log(isValidPart(['.', '.', '.', '.', '.', '.', '.', '.', '2']));
console.log(isValidPart(['.', '.', '.', '.', '.', '.', '.', '.', '.']));
console.log(isValidPart(['.', '3', '.', '.', '3', '.', '.', '.', '1']));
