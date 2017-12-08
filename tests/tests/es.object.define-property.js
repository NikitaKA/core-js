QUnit.test('Object.defineProperty', assert => {
  const { defineProperty, create } = Object;
  assert.isFunction(defineProperty);
  assert.arity(defineProperty, 3);
  assert.name(defineProperty, 'defineProperty');
  assert.looksNative(defineProperty);
  assert.nonEnumerable(Object, 'defineProperty');
  const source = {};
  const result = defineProperty(source, 'q', {
    value: 42,
  });
  assert.same(result, source);
  assert.same(result.q, 42);
  assert.throws(() => {
    return defineProperty(42, 1, {});
  });
  assert.throws(() => {
    return defineProperty({}, create(null), {});
  });
  assert.throws(() => {
    return defineProperty({}, 1, 1);
  });
});