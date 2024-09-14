const arr = [1,2,3,4,5,6,7,8,9,10];
let mockMapper;

beforeEach(()=> {
  mockMapper = jest.fn(item => { console.log(`mapper function called with arg: ${item}`); return item ** 2 });
});

/* creating array allocates memory. array methods like map() and filter() create
 * new arrays so more memory is allocated and values populated
 */
test('Array.map() immediately allocates memory and invokes mapper function for all elements', () => {
  let mappedArray = arr.map(mockMapper)

  expect(mockMapper).toHaveBeenCalledTimes(10)
  expect(mappedArray.length).toBe(10)
});

/* sometimes not all new elements are immediately needed */
test('generators lazily compute values', () => {
  let makeLazyIterator = function * (iterable, mapper) { for (const item of iterable) { yield mapper(item) } }
  
  // notice mockMapper isn't called when creating an instance of the generator
  let lazyIterator = makeLazyIterator(arr, mockMapper)
  expect(mockMapper).not.toHaveBeenCalled()

  // now mapper gets called when the iterator is actually read, e.g. via spread operation: 
  ;[...lazyIterator]  
  expect(mockMapper).toHaveBeenCalledTimes(10)
});

/* Array.values() returns lazy-loaded iterator with iterator helpers (map, filter, etc.) */
test('Array.values() returns lazy-loaded iterator', () => {
  expect(arr.values()).toBeInstanceOf(Iterator)

  let lazyMap = arr.values().map(mockMapper)
  expect(mockMapper).not.toHaveBeenCalled();

  ;[...lazyMap]
  expect(mockMapper).toHaveBeenCalledTimes(10)
});
