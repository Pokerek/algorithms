const groupAnagrams = function (strings) {
   if (!strings || strings.length === 0) return [];
   if (strings.length === 1) return [strings];

   const groupStrings = [];
   const group = [];
   strings.forEach((str) => {
      const sorted = str.split('').sort().join('');
      const index = group.indexOf(sorted);
      if (index != -1) {
         groupStrings[index].push(str);
      } else {
         groupStrings.push([str]);
         group.push(sorted);
      }
   });

   return groupStrings;
};
