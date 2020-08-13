export default function healthy(gamer) {
  if (gamer.health > 50) {
    return 'healthy';
  }
  if (gamer.health <= 50 && gamer.health >= 15) {
    return 'wounded';
  }
  if (gamer.health < 15) {
    return 'critical';
  }
  return '';
};
//second
export const gamer = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

export function sortByHealth(arr) {
  arr.sort((a, b) => a.health - b.health);
};
