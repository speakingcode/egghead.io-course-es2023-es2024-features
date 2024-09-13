let setABC = new Set(["A", "B", "C"]);
let setCDE = new Set(["C", "D", "E"]);

/* union of two sets */
> setABC.union(setCDE)
Set(5) { 'A', 'B', 'C', 'D', 'E' }

/* intersection/commonality of two sets */
> setABC.intersection(setCDE)
Set(1) { 'C' }

/* left set difference from right */
> setABC.difference(setCDE)
Set(2) { 'A', 'B' }
> setCDE.difference(setABC)
Set(2) { 'D', 'E' }

/* left set difference union with right set difference - i.e. all the elements that aren't intersection */

> setABC.symmetricDifference(setCDE)
Set(4) { 'A', 'B', 'D', 'E' }
> setCDE.symmetricDifference(setABC)
Set(4) { 'D', 'E', 'A', 'B' }

/* can be done with Set.difference() and set.Union() */
> setABC.difference(setCDE).union(setCDE.difference(setABC))
Set(4) { 'A', 'B', 'D', 'E' }
> setCDE.difference(setABC).union(setABC.difference(setCDE))
Set(4) { 'D', 'E', 'A', 'B' }

/* see if two sets are disjoint, i.e. have no common elements/no intersection */
> setABC.isDisjointFrom(setCDE)
false
> let setDEF = new Set(["D", "E", "F"])
> setABC.isDisjointFrom(setDEF)
true

/* check if A is subset of B */
> setABC.isSubsetOf(setCDE)
false
> new Set(["A", "B"]).isSubsetOf(setABC)
true

/* check if A is superset of B */
> setABC.isSupersetOf(setCDE)
false
> setABC.isSupersetOf(new Set(["A", "B"]))
true 

/* non-primitive sets - objects are compared by reference, hence non-primitive sets are as well */
> let obj1 = {}, obj2 = {}
> let setObj = new Set([obj1]);
Set(1) { {} }
> setObj.intersection(new Set([obj2]))
Set(0) {}
// works if object is literally same reference
> setObj.intersection(new Set([obj1]))
Set(1) { {} }
