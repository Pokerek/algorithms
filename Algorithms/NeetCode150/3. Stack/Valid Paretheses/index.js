const isValid = function (s) {
   const parentheses = [0, 0, 0];
   const last = [];

   for (let i = 0, length = s.length; i < length; i++) {
      switch (s[i]) {
         case '(':
            last.push(s[i]);
            parentheses[0]++;
            break;
         case '[':
            last.push(s[i]);
            parentheses[1]++;
            break;
         case '{':
            last.push(s[i]);
            parentheses[2]++;
            break;
         case ')':
            if (last.at(-1) !== '(') return false;
            last.pop();
            parentheses[0]--;
            break;
         case ']':
            if (last.at(-1) !== '[') return false;
            last.pop();
            parentheses[1]--;
            break;
         case '}':
            if (last.at(-1) !== '{') return false;
            last.pop();
            parentheses[2]--;
            break;
      }
   }

   return parentheses.every((el) => el === 0);
};
