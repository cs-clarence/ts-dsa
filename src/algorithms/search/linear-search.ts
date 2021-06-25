export function linearSearch<T>(arr: T[], item: T) {
  const len = arr.length;
  for (let i = 0; i < len; ++i) {
    if (arr[i] === item) return i;
  }
}
