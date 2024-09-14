/* Suppose an array or iterable we want to group */
let employees = [
  { name: "bob",   role: "dev", active: true  },
  { name: "alice", role: "sec", active: true  },
  { name: "jane",  role: "sec", active: false },
  { name: "tom",   role: "dev", active: false },
];


/* Group by element property */
test('Group by element property', () => {
  expect(Object.groupBy(employees, employee => employee.role)).toEqual({
    dev: [
      { name: 'bob', role: 'dev', active: true },
      { name: 'tom', role: 'dev', active: false }
    ],
    sec: [
      { name: 'alice', role: 'sec', active: true },
      { name: 'jane', role: 'sec', active: false }
    ]
  })
});

/* Group by destructured property */
test('Group by desctructured property', () => {
  expect(Object.groupBy(employees, ({role}) => role)).toEqual({ 
    dev: [
      { name: 'bob', role: 'dev', active: true },
      { name: 'tom', role: 'dev', active: false }
    ],
    sec: [
      { name: 'alice', role: 'sec', active: true },
      { name: 'jane', role: 'sec', active: false }
    ]  
  })
});

/* Group with dynamically-created groups */
test('Group by dynamically-created groups', () => {
  expect(Object.groupBy(
    employees,
    employee => `status: ${employee.active? 'active' : 'inactive'}`
  ))
  .toEqual({
    'status: active': [
      { name: 'bob', role: 'dev', active: true },
      { name: 'alice', role: 'sec', active: true }
    ],
    'status: inactive': [
      { name: 'jane', role: 'sec', active: false },
      { name: 'tom', role: 'dev', active: false }
    ]
  })
});

/* Group any iterable, such as Sets */
let employeeSet = new Set([
  { name: "bob",   role: "dev", active: true  },
  { name: "alice", role: "sec", active: true  },
  { name: "jane",  role: "sec", active: false },
  { name: "tom",   role: "dev", active: false },
]);


test('Group sets', () => {
  expect(Object.groupBy(employeeSet, ({role}) => role))
  .toEqual({
    dev: [
      { name: 'bob', role: 'dev', active: true },
      { name: 'tom', role: 'dev', active: false }
    ],
    sec: [
      { name: 'alice', role: 'sec', active: true },
      { name: 'jane', role: 'sec', active: false }
    ]
  })
});

/* ...or generators */
let employeeGenerator = function * () {
  yield { name: "bob",   role: "dev", active: true  };
  yield { name: "alice", role: "sec", active: true  };
  yield { name: "jane",  role: "sec", active: false };
  yield { name: "tom",   role: "dev", active: false };
};

test('Group generator output', () => {
  expect(Object.groupBy(employeeGenerator(), ({role}) => role))
  .toEqual({
    dev: [
      { name: 'bob', role: 'dev', active: true },
      { name: 'tom', role: 'dev', active: false }
    ],
    sec: [
      { name: 'alice', role: 'sec', active: true },
      { name: 'jane', role: 'sec', active: false }
    ]
  })
});
