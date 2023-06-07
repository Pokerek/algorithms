const evalRPN = function (tokens) {
   const numbers = [];
   const symbols = ['+', '-', '*', '/'];
   for (let i = 0; i < tokens.length; i++) {
      if (symbols.includes(tokens[i])) {
         const a = numbers.pop();
         const b = numbers.pop();

         switch (tokens[i]) {
            case '+':
               numbers.push(b + a);
               break;
            case '-':
               numbers.push(b - a);
               break;
            case '*':
               numbers.push(b * a);
               break;
            case '/':
               const result = b / a;
               numbers.push(
                  result > 0 ? Math.floor(result) : Math.ceil(result)
               );
               break;
         }
      } else {
         numbers.push(+tokens[i]);
      }
   }

   return numbers[0];
};
