import { linearSearch } from './index';

describe('Linear search', () => {
   it('should return index of value in array if value exists in array', () => {
      expect(linearSearch(3, [1, 2, 3])).toBe(2);
   })

   it('should return -1 if value does not exist in array',() => {
      expect(linearSearch(10, [1, 2, 3])).toBe(-1);
   })

   it('should return -1 if if array is empty',() => {
      expect(linearSearch(10, [])).toBe(-1);
   })

   it('should throw an error if second argument is not an array', () => {
      expect(() => linearSearch(10,12)).toThrow('Second argument must be an array.');
   })

   it('should throw an error if no arguments are passed', () => {
      expect(() => linearSearch()).toThrow('You need two arguments value and array.')
   })
})