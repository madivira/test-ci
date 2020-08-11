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
}
