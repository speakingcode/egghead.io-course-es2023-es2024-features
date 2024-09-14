let setABC = new Set(["A", "B", "C"]);
let setCDE = new Set(["C", "D", "E"]);

/* union of two sets */

test('union() returns the union of two sets', () => {
  expect(setABC.union(setCDE)).toEqual(
    new Set([ 'A', 'B', 'C', 'D', 'E'])
  )
});

/* intersection/commonality of two sets */
test('intesection() returns the intersection (common elements) of two sets', () => {
  expect(setABC.intersection(setCDE)).toEqual(new Set(['C']))
});

/* left set difference from right */
test('difference() returns elements in left set that are not in right set', () => {
  expect(setABC.difference(setCDE)).toEqual(new Set(['A', 'B']))
  expect(setCDE.difference(setABC)).toEqual(new Set(['D', 'E']))
});

/* left set difference, union with right set difference - i.e. all the elements that aren't intersection */
test('symmetricDifference() returns union of left and right set difference', () => {
  expect(setABC.symmetricDifference(setCDE)).toEqual(new Set(['A', 'B', 'D', 'E']))
  expect(setCDE.symmetricDifference(setABC)).toEqual(new Set(['D', 'E', 'A', 'B']))
});

/* can be done with Set.difference() and set.Union() */
test('symmetricDifference() is same as left-first differnce union right-first difference', () => {
  expect(
    setABC.difference(setCDE).union(setCDE.difference(setABC))
  )
  .toEqual(
    setABC.symmetricDifference(setCDE)
  )
  
  expect(
    setCDE.difference(setABC).union(setABC.difference(setCDE))
  )
  .toEqual(
    setCDE.symmetricDifference(setABC)
  )
});

/* see if two sets are disjoint, i.e. have no common elements/no intersection */
test('isDisjoint() determines if two sets have any intersection/common elements', () => {
  expect(setABC.isDisjointFrom(setCDE)).toBe(false)
  
  let setDEF = new Set(["D", "E", "F"])
  expect(setABC.isDisjointFrom(setDEF)).toBe(true)
});

/* check if A is subset of B */
test('isSubsetOf() returns true if right set is a subset of left set', () => {
  expect(setABC.isSubsetOf(setCDE)).toBe(false)
  expect(new Set(["A", "B"]).isSubsetOf(setABC)).toBe(true)
});

/* check if A is superset of B */
test('isSupersetOf() returns true if right set is a superset of left set', () => {
  expect(setABC.isSupersetOf(setCDE)).toBe(false)
  expect(setABC.isSupersetOf(new Set(["A", "B"]))).toBe(true)
});

/* non-primitive sets - objects are compared by reference, hence non-primitive sets are as well */
let obj1 = { value: "obj" }, obj2 = { value: "obj" };
let setObj = new Set([obj1]);

test('non-primitive objects in sets are tested for equality by reference', () => {
  expect(setObj.intersection(new Set([obj2]))).toEqual(new Set([]))
  expect(setObj.intersection(new Set([obj1]))).toEqual(new Set([obj1]))
});
