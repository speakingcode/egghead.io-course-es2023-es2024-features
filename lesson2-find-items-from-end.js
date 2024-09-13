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

arr [0]
// { position: '1', name: 'first' }

arr[arr.length - 1]
// { position: '10', name: 'tenth' }

/* can't address from end
// > arr[-1]
// undefined

/* Array.at() can address from beginning or end */

arr.at(0)
// { position: '1', name: 'first' }

arr.at(-1)
// { position: '10', name: 'tenth' }
arr.at(-2)
// { position: '9', name: 'random' }

/* find first element from beginning/left/0th index which meets condition */

arr.find(({name}) => name == "third")
// { position: '3', name: 'third' }

arr.find(({name}) => name == "random")
// { position: '4', name: 'random' }

/* find last elmement (i.e. first match traversing from the end/right/last index */

arr.findLast(({name}) => name == "random")
// { position: '9', name: 'random' }

/* find the index of element that first matches */

arr.findIndex(({name}) => name == "random")
// 3
arr.findLastIndex(({name}) => name == "random")
// 8
