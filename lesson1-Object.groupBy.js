/* Suppose an array or iterable we want to group */
let employees = [
  { name: "bob",   role: "dev", active: true  },
  { name: "alice", role: "sec", active: true  },
  { name: "jane",  role: "sec", active: false },
  { name: "tom",   role: "dev", active: false },
];

/* Group by element property */
Object.groupBy(employees, employee => employee.role)

// [Object: null prototype] {
//   dev: [
//     { name: 'bob', role: 'dev', active: true },
//     { name: 'tom', role: 'dev', active: false }
//   ],
//   sec: [
//     { name: 'alice', role: 'sec', active: true },
//     { name: 'jane', role: 'sec', active: false }
//   ]
// }

/* Group by destructured property */
Object.groupBy(employees, ({role}) => role)

// [Object: null prototype] {
//   dev: [
//     { name: 'bob', role: 'dev', active: true },
//     { name: 'tom', role: 'dev', active: false }
//   ],
//   sec: [
//     { name: 'alice', role: 'sec', active: true },
//     { name: 'jane', role: 'sec', active: false }
//   ]
// }

/* Group with dynamically-created groups */
Object.groupBy(employees, employee => `status: ${employee.active? 'active' : 'inactive'}`)

// [Object: null prototype] {
//   'status: active': [
//     { name: 'bob', role: 'dev', active: true },
//     { name: 'alice', role: 'sec', active: true }
//   ],
//   'status: inactive': [
//     { name: 'jane', role: 'sec', active: false },
//     { name: 'tom', role: 'dev', active: false }
//   ]
// }

/* Group any iterable, such as Sets */
let employeeSet = new Set([
  { name: "bob",   role: "dev", active: true  },
  { name: "alice", role: "sec", active: true  },
  { name: "jane",  role: "sec", active: false },
  { name: "tom",   role: "dev", active: false },
]);

Object.groupBy(employeeSet, ({role}) => role)

// [Object: null prototype] {
//   dev: [
//     { name: 'bob', role: 'dev', active: true },
//     { name: 'tom', role: 'dev', active: false }
//   ],
//   sec: [
//     { name: 'alice', role: 'sec', active: true },
//     { name: 'jane', role: 'sec', active: false }
//   ]
// }

/* ...or generators */
let employeeGenerator = function * () {
  yield { name: "bob",   role: "dev", active: true  };
  yield { name: "alice", role: "sec", active: true  };
  yield { name: "jane",  role: "sec", active: false };
  yield { name: "tom",   role: "dev", active: false };
};

Object.groupBy(employeeGenerator(), ({role}) => role)
// [Object: null prototype] {
//   dev: [
//     { name: 'bob', role: 'dev', active: true },
//     { name: 'tom', role: 'dev', active: false }
//   ],
//   sec: [
//     { name: 'alice', role: 'sec', active: true },
//     { name: 'jane', role: 'sec', active: false }
//   ]
// }
