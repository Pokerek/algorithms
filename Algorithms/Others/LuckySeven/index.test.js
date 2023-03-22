import luckySevens from "."

describe('LuckySeven', () => {
   it('should return true if sum of any three consecutive numbers sum to 7', () => {
      expect(luckySevens([1, 2, 4])).toBe(true);
      expect(luckySevens([1, 2, 3, 2, 8])).toBe(true);
      expect(luckySevens([1, 2, 0 ,3, 4, 8])).toBe(true);
   })
   it('should return false if array length is less than 3 or sum of three element is not equal 3', () => {
      expect(luckySevens([])).toBe(false);
      expect(luckySevens([2,3])).toBe(false);
   }) 
   it('should throw error if argument is not an array or argument is not passed', () => {
      expect(() => luckySevens('test')).toThrow('Argument must be an array.')
      expect(() => luckySevens(2)).toThrow('Argument must be an array.')
      expect(() => luckySevens({test: 'test'})).toThrow('Argument must be an array.')
      expect(() => luckySevens()).toThrow('Argument must be an array.')
   })
})