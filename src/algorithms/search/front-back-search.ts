export function frontBackSearch<T>(arr: T[], item: T) {
  const len = arr.length;
  for (let i = 0, j = len - 1; i <= j; ++i, --j) {
    if (arr[i] === item) {
      return i;
    } else if (arr[j] === item) {
      return j;
    }
  }
}
