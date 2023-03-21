import bubbleSort from "."


describe('Bubble sort', () => {
   it('should return sorted array', () => {
      expect(bubbleSort([1, 4, 6, 2, 7])).toStrictEqual([1, 2, 4, 6, 7]);
      expect(bubbleSort([10, 9, 8, 7, 6])).toStrictEqual([6, 7, 8, 9, 10]);
      expect(bubbleSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
      expect(bubbleSort([])).toStrictEqual([]);
      expect(bubbleSort([1])).toStrictEqual([1]);
   })

   it('should throw error if argument is not an array or argument is not passed', () => {
      expect(() => bubbleSort('test')).toThrow('Argument must be an array.')
      expect(() => bubbleSort(2)).toThrow('Argument must be an array.')
      expect(() => bubbleSort({test: 'test'})).toThrow('Argument must be an array.')
      expect(() => bubbleSort()).toThrow('Argument must be an array.')
   })
})