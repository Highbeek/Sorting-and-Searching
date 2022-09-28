function insert(arr, val) {
  arr.push(val);
  i = arr.length - 1;
  item = arr[i];
  while (i > 0 && item < arr[i - 1]) {
    arr[i] = arr[i - 1];
    i -= 1;
  }
  arr[i] = item;
  return arr;
}
console.log(insert([5, 10, 15, 20, 25, 30], 23));
