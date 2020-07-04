function difference(arr) {
  const testArr = [...arguments].slice(1);
  console.log(testArr);
  const newArr = [];
  arr.forEach(val => {
    if (!testArr.includes(val)) newArr.push(val);
  });
  return newArr;
}
console.log(difference([21, 22], [21]));
