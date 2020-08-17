import healthy from '../app';
import sortByHealth from '../sort';

test.each([
  ['healthy+', 100, 'healthy'],
  ['healthy', 75, 'healthy'],
  ['wounded+', 50, 'wounded'],
  ['woundedmiddle', 30, 'wounded'],
  ['wounded-', 15, 'wounded'],
  ['critical-', 5, 'critical'],
  ['critical-', 0, 'critical'],
  ['', undefined, ''],
])(('testing healthy'), (title, amount, expected) => {
  expect(healthy({ health: amount })).toBe(expected);
});
// second
describe('array', () => {
  test('test array', () => {
    const gamer = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    expect(sortByHealth(gamer)).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('test array reverse', () => {
    const gamer = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    expect(sortByHealth(gamer).reverse()).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: 80 },
      { name: 'маг', health: 100 },
    ]);
  });

  test('test array health 0', () => {
    const gamer = [
      { name: 'мечник', health: 0 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 0 },
    ];
    expect(sortByHealth(gamer)).toEqual([
      { name: 'маг', health: 10 },
      { name: 'мечник', health: 0 },
      { name: 'лучник', health: 0 },
    ]);
  });

  test('test array health -1', () => {
    const gamer = [
      { name: 'мечник', health: -1 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 80 },
    ];

    expect(sortByHealth(gamer)).toEqual([
      { name: 'лучник', health: 80 },
      { name: 'маг', health: 10 },
      { name: 'мечник', health: -1 },
    ]);
  });

  test('test array health 10,10,10', () => {
    const gamer = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 10 },
    ];

    expect(sortByHealth(gamer)).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 10 },
    ]);
  });
});
