import binarySearch from ".";

describe('Binary search', () => {
   it('should return index of value in array if value exist in array', () => {
      expect(binarySearch(10, [1, 2, 3, 10])).toBe(3);
      expect(binarySearch(10, [1, 2, 10, 100, 100])).toBe(2);
      expect(binarySearch('tata', ['t', 'ta', 'tat', 'tata', 'tata\'', 'tata\'s'])).toBe(3);
   })
   
   it('should return -1 if value does not exist in array',() => {
      expect(binarySearch(10, [1, 2, 3])).toBe(-1);
      expect(binarySearch('mama', ['t', 'ta', 'tat', 'tata', 'tata\'', 'tata\'s'])).toBe(-1);
   })

   it('should return -1 if if array is empty',() => {
      expect(binarySearch(10, [])).toBe(-1);
   })
   
   it('should throw an error if second argument is not an array', () => {
      expect(() => binarySearch(10,12)).toThrow('Second argument must be an array.');
   })

   it('should throw an error if no arguments are passed', () => {
      expect(() => binarySearch().toThrow('You need two arguments value and array.'))
   })

   it("should throw an error if array is not sorted", () => {
      expect(() => binarySearch().toThrow('Array must be sorted!'))
   })
})