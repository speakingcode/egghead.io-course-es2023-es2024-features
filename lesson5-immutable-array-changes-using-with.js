let todos;

beforeEach(() => {
  todos = [
    {
     id: 1,
     todo: 'buy food',
     completed: false
    },
    {
      id: 2,
      todo: 'watch movies',
      completed: true
    }
  ];
});

test('modifying the array directly mutates the array', () => {
  todos.find(todo => todo.id === 1).completed = !todos.find(todo => todo.id ===1).completed

  expect(todos.find(({id}) => id === 1).completed).toBe(true)
});

test('mapping to new array does not mutate original array', () => {
  let newTodos = todos.map(todo => todo.id !== 1 ? todo : {...todo, completed: !todo.completed})

  expect(newTodos.find(({id}) => id === 1).completed).toBe(true)
  expect(   todos.find(({id}) => id === 1).completed).toBe(false)
});

test('Array.with() returns new array without mutating original', () => {
  const index = todos.findIndex(({id}) => id === 1)

  let newTodos = todos.with(index, {...todos.at(index), completed: !todos.at(index).completed})

  expect(newTodos.at(index).completed).toBe(true)
  expect(   todos.at(index).completed).toBe(false)
});
