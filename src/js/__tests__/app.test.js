import healthy from '../app';

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

test('test array', () => {
    const gamer = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];
    
    function sortByHealth(arr) {
        arr.sort((a, b) => a.health - b.health);
    };
    
    sortByHealth(gamer);
    
    const gamerNew = gamer.reverse();
   
    expect(gamerNew).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);
})