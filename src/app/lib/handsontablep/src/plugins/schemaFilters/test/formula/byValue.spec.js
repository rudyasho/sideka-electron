describe('Filters formula (`by_value`)', function() {

  function assertion(items) {
    return function(value) {
      return items.indexOf(value) !== -1;
    }
  }

  it('should filter matching values', function() {
    var formula = getFilterFormula('by_value');
    var data = dateRowFactory();

    expect(formula(data(4), [assertion([4])])).toBe(true);
    expect(formula(data(4), [assertion([4, 4])])).toBe(true);
    expect(formula(data(4), [assertion([1, 2, 3, 4, 5, 6, 7, 8])])).toBe(true);
    expect(formula(data('4'), [assertion(['5', '4'])])).toBe(true);
    expect(formula(data('2015'), [assertion(['2019', '2014', '2015'])])).toBe(true);
    expect(formula(data('foo'), [assertion(['foo', 'bar', 'baz'])])).toBe(true);
    expect(formula(data(-1), [assertion([-9, -3, -1])])).toBe(true);
    expect(formula(data(''), [assertion([-9, '', -1])])).toBe(true);
    expect(formula(data(null), [assertion([-9, null, -1])])).toBe(true);
    expect(formula(data(void 0), [assertion([-9, void 0, -1])])).toBe(true);
  });

  it('should filter not matching values', function() {
    var formula = getFilterFormula('by_value');
    var data = dateRowFactory();

    expect(formula(data(null), [assertion([-9, '', -1])])).toBe(false);
    expect(formula(data(void 0), [assertion([-9, '', -1])])).toBe(false);
    expect(formula(data(4), [assertion([1, 9])])).toBe(false);
    expect(formula(data(4), [assertion([1, 1, 2, 3, 4.8])])).toBe(false);
    expect(formula(data(4), [assertion([1, 2, 3, 5, 6, 7, 8])])).toBe(false);
    expect(formula(data('4'), [assertion(['5', '4:)'])])).toBe(false);
    expect(formula(data('2015'), [assertion(['2019.', '2014.', '2015.'])])).toBe(false);
    expect(formula(data('foo'), [assertion(['fooo', 'bar', 'baz'])])).toBe(false);
    expect(formula(data(-1), [assertion([-9, -3, -1.1])])).toBe(false);
  });
});
