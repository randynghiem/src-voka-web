import * as ListUtils from './list';

/**
 * Test case for list-based methods
 */
describe("list.js", () => {
  test("should mark the line with the same start", () => {
    const lines = [
      { id: 1, start: 5 },
      { id: 2, start: 10 },
      { id: 3, start: 15 }
    ];
    const cur = 10;
    expect(ListUtils.markLines(lines, cur)).toEqual([
      { id: 1, start: 5, current: '' },
      { id: 2, start: 10, current: 'current' },
      { id: 3, start: 15, current: '' }
    ]);
  });
});
