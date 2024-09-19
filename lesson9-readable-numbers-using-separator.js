test('using numerical separator _ has no effect on numerical value', () => {
  expect(1_000_000_000).toBe(1000000000)
  expect(101_475_938).toBe(101475938)
  expect(0.000_001).toBe(0.000001)
  expect(1e10_000).toBe(1e10000)
  expect(0b10100001_10000101).toBe(0b1010000110000101)
  expect(0o12_34_56_70).toBe(0o12345670)
  expect(0xA0_B0_C0).toBe(0xA0B0C0)
  expect(9_223_372_036_854_775_807n).toBe(9223372036854775807n)
});
