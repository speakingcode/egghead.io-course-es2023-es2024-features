let { promise, resolve, reject } = Promise.withResolvers()
test('Promise.withResolvers().resolve() resolves a promise', () => {
  //return promise.then(data => { expect(data).toBe('value') })
  return expect(promise).resolves.toBe('value')
});
resolve('value')

let { promise: promise2, resolve : resolve2, reject: reject2 } = Promise.withResolvers()
test('Promise.withResolvers().reject() rejects a promise', () => {
  return expect(promise2).rejects.toMatch('error')
});
reject2('error')
