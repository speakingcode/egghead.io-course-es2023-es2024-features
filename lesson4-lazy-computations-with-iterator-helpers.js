const arr = [1,2,3,4,5,6,7,8,9,10];

/* creating array allocates memory. array methods like map() and filter() create
 * new arrays so more memory is allocated and values populated
 */
> arr.map(x => x ** 2)
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]

/* sometimes not all new elements are immediately needed */
> let lazyMap = function * (iterable, mapper) { for (const item of iterable) { yield mapper(item) } }
//notice mapper isn't called when creating an instance of the generator
> lazyMap(arr, x => { console.log('mapper function called!'); return x ** 2; })
Object [Generator] {}
> let iter = lazyMap(arr, x => { console.log('mapper function called!'); return x ** 2; })
// now mapper gets called when the iterator is actually read, e.g. via spread operation: 
> [...iter]
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]

/* Array.values() returns lazy-loaded iterator with iterator helpers (map, filter, etc.) */

> arr.values()
Object [Array Iterator] {}

> iter = arr.values().map(x => { console.log('mapper function called!'); return x ** 2; })
Object [Iterator Helper] {}
> [...iter]
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]

/* contrast to normal "eager" array methods... */
> arr.map(x => { console.log('mapper function called!'); return x ** 2; })
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
mapper function called!
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]

