// Does an in-place swap of items with given indices in an array
export function swap<T>(arr: T[], index1: number, index2: number) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
