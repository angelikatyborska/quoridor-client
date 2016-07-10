import '../setup';

describe('Foo', () => {
  it('is not bar', () => {
    expect('foo').not.to.be.equal('bar');
  });
});
