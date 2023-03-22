import { add } from "."

describe('Add function', () => {
   it('should return sum of all elements', () => {
      expect(add(2, 45, 6)).toBe(53);
      expect(add(1, 2, 3, 4, 5)).toBe(15);
      expect(add(2, 3, '4')).toBe(9);
   })
   it('should return 0 if not arguments is passed', () => {
      expect(add()).toBe(0);
   })

   it('should throw error if any argument is not a number', () => {
      expect(() => add('b')).toThrow('Arguments must be a number.');
      expect(() => add({})).toThrow('Arguments must be a number.');
      expect(() => add(1,3,'23s')).toThrow('Arguments must be a number.');
   })
})