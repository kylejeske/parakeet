export const result = (arr1, arr2) => {
  let arr = [...arr1, ...arr2].sort();
  let pos = (arr.length / 2);

  console.log(`Pos: ${pos}, Array: ${arr[Math.floor(pos)]}`, arr);

  if (pos % 2 === 1) {
    console.log(`Pos1: ${arr[Math.floor(pos)]}`)
    return parseInt((arr[Math.floor(pos)] + arr[Math.ceil(pos)] / 2), 10);
  }
  return parseInt(arr[Math.floor(pos)], 10);
  // [...arr1, ...arr2].sort()
  // (numberOfElements + 1) / 2 == Position within Array [1-Index, not indicies];
  // If position has remainder (isn't a whole number)
  // [Floor(Position) + Ceil(Position)] / 2
  // [1,2,3,7]
  // [2,3] => 5 / 2 => 2.5
};

export default result;
