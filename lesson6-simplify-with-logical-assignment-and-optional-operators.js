test('OR assignment only assigns if arg is falsey', () => {
  let arg = false

  arg ||= 'truthy'
  expect(arg).toBe('truthy')

  arg ||= 'somethingElse'
  expect(arg).not.toBe('somethingElse')
  expect(arg).toBe('truthy')
});

test('AND assignment only assigns if arg is truthy', () => {
  let arg = false

  arg &&= 'truthy'
  expect(arg).toBe(false)

  arg = 'truthy'
  
  arg &&= 'somethingElse'
  expect(arg).not.toBe('truthy')
  expect(arg).toBe('somethingElse')
});

test('NULL assignment only assigns if arg is null or undefined', () => {
  let arg;

  arg ??= 'truthy'
  expect(arg).toBe('truthy')

  arg = null;

  arg ??= 'something'
  expect(arg).toBe('something')

  arg = false
  
  arg ??= 'somethingElse'
  expect(arg).toBe(false)
});
