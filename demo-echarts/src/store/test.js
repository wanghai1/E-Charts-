function twe(val) {
  if (Number(val) === Number(val)) {
    val = Number(val).toFixed(2);
    let strArr = String(val).split(".");
    let fristNumber = strArr[0].split("").reverse();
    let frist = "";
    // eslint-disable-next-line no-undef
    for (i = 0, j = 0; i < fristNumber.length; i++) {
      // eslint-disable-next-line no-undef
      if (j === 2) {
        frist += fristNumber[i] + ".";
      } else {
        frist += fristNumber[i];
      }
      j = j % 3;
    }
    val =
      frist
        .split("")
        .reverse()
        .join("") + fristNumber[1];
  }

  return val;
}

console.log(twe(22646423.2));
