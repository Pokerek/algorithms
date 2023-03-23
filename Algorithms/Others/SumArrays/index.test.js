import sumArrays from "."

describe('SumArrays', () => {
   it('should return sum of numbers in nested array', () => {
      expect(sumArrays([1, 2, 3])).toBe(6);
      expect(sumArrays([1, 2, [3, 4, [5, 6]]])).toBe(21);
      expect(sumArrays([1, 2, [3, 4], [6, 7]])).toBe(23);
      expect(sumArrays([[[[1]]], [[[2]]]])).toBe(3);
   })

   it('should return 0 if array is empty', () => {
      expect(sumArrays([])).toBe(0);
   })

   it ('should throw an error if argument is not an array', () => {
      expect(() => sumArrays(2)).toThrow('Argument must be an array.');
      expect(() => sumArrays('2')).toThrow('Argument must be an array.');
   })
   
   it('should throw an error if element of array is not a number', () => {
      expect(() => sumArrays([1,'2',['a']])).toThrow('Array should only contains numbers.');
   })
})