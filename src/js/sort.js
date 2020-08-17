// second
export default function sortByHealth(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
