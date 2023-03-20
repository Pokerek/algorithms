import isArraySorted from ".";

describe('isArraySorted', () => {
   it('should return true', () => {
      expect(isArraySorted([1, 2, 3, 4, 5])).toBe(true);
      expect(isArraySorted([-3, -1, 2, 3, 7])).toBe(true);
      expect(isArraySorted(['a', 'aa', 'aaa', 'aaa', 'aaaa'])).toBe(true);
      expect(isArraySorted([])).toBe(true);
   })

   it('should return false', () => {
      expect(isArraySorted([-2, 3, -4])).toBe(false);
      expect(isArraySorted([10, -2, 5, -1])).toBe(false);
      expect(isArraySorted(['sda', '2', 'ad1'])).toBe(false);
   })

   it('should throw error if argument is not an array or not argument is passed', () => {
      expect(() => isArraySorted()).toThrow('Argument must be an array');
      expect(() => isArraySorted(0)).toThrow('Argument must be an array');
      expect(() => isArraySorted('test')).toThrow('Argument must be an array');
   })
})