const maxArea = function (height) {
   const length = height.length;
   if (length === 2) return Math.min(...height);

   let container = 0;
   let left = 0;
   let right = length - 1;

   while (left < right) {
      const currentContainer =
         Math.min(height[left], height[right]) * (right - left);
      container = Math.max(container, currentContainer);
      if (height[left] > height[right]) {
         right--;
      } else {
         left++;
      }
   }

   return container;
};
