const arr = [
  { position: "1", name: "first" },
  { position: "2", name: "second" },
  { position: "3", name: "third" },
  { position: "4", name: "random" },
  { position: "5", name: "random" },
  { position: "6", name: "sixth" },
  { position: "7", name: "random" },
  { position: "8", name: "eighth" },
  { position: "9", name: "random" },
  { position: "10", name: "tenth" },
];

/* normal array access by index... 0 to (arr.length - 1) */
test('Normal array access...', () => {
  expect(arr [0]).toEqual({ position: '1', name: 'first' })
  expect(arr[arr.length - 1]).toEqual({ position: '10', name: 'tenth' })
});

/* can't address from end */
test('Addressing array from end/negative index does not work', () => {
  expect(arr[-1]).toBe(undefined)
});

/* Array.at() can address from beginning or end */
test('Array.at() can address from beginning', () => {
  expect(arr.at(0)).toEqual({ position: '1', name: 'first' })
});

test('Array.at() can address from end/use negative indices', () => {
  expect(arr.at(-1)).toEqual({ position: '10', name: 'tenth' })
  expect(arr.at(-2)).toEqual({ position: '9', name: 'random' })
});

/* find first element from beginning/left/0th index which meets condition */
test('Array.find() returns first element which matches condition', () => {
  expect(arr.find(({name}) => name == "third"))
  .toEqual({ position: '3', name: 'third' })

  expect(arr.find(({name}) => name == "random"))
  .toEqual({ position: '4', name: 'random' })
});

/* find last elmement (i.e. first match traversing from the end/right/last index */
test('Array.findLast() returns last element which meets condition', () => {
  expect(arr.findLast(({name}) => name == "random"))
  .toEqual({ position: '9', name: 'random' })
});

/* find the index of first element that matches */
test('Array.findIndex() returns index of first element which meets condition', () => {
  expect(arr.findIndex(({name}) => name == "random")).toBe(3)
});

/* find the index of last element that matches */
test('Array.findLastIndex() returns index of last element which meets condition', () => {
  expect(arr.findLastIndex(({name}) => name == "random")).toBe(8)
});
