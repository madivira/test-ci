import healthy, {sortByHealth, gamer} from '../app';

test.each([
  ['healthy+', 100, 'healthy'],
  ['healthy', 75, 'healthy'],
  ['wounded+', 50, 'wounded'],
  ['woundedmiddle', 30, 'wounded'],
  ['wounded-', 15, 'wounded'],
  ['critical-', 5, 'critical'],
  ['critical-', 0, 'critical'],
  ['', undefined , ''],
])(('testing healthy'), (title, amount, expected) => {
  expect(healthy({ health: amount })).toBe(expected);
});
//second
describe("array", () => {

  test("test array", () => {
    expect(gamer).toEqual([
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ]);
  })

  test('test array reverse', () => {
    sortByHealth(gamer);
  
    expect(gamer.reverse()).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);
  })

  test('test array health 0', () => {
    expect(gamer).not.toEqual([
      {name: 'маг', health: 0},
      {name: 'лучник', health: 0},
      {name: 'мечник', health: 0},
    ]);
  })

  test('test array health -1', () => {
    expect(gamer).not.toEqual([
      {name: 'маг', health: -1},
      {name: 'лучник', health: -1},
      {name: 'мечник', health: -1},
    ]);
  })

})


