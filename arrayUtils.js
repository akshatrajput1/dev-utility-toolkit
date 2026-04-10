export const numbers = [1, 2, 3, 4, 5];

export function doubleArray(arr) {
  return arr.map((num) => num * 2);
}

export default function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
