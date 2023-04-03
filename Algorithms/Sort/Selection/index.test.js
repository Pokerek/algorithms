import selectionSort from "."

describe('Selection sort', () => {
   it('should return sorted array', () => {
      expect(selectionSort([1, 4, 6, 2, 7])).toStrictEqual([1, 2, 4, 6, 7]);
      expect(selectionSort([10, 9, 8, 7, 6])).toStrictEqual([6, 7, 8, 9, 10]);
      expect(selectionSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
      expect(selectionSort([])).toStrictEqual([]);
      expect(selectionSort([1])).toStrictEqual([1]);
   })

   it('should throw error if argument is not an array or argument is not passed', () => {
      expect(() => selectionSort('test')).toThrow('Argument must be an array.')
      expect(() => selectionSort(2)).toThrow('Argument must be an array.')
      expect(() => selectionSort({test: 'test'})).toThrow('Argument must be an array.')
      expect(() => selectionSort()).toThrow('Argument must be an array.')
   })
})