function targetTerdekat(arr) {
  var index_o = [];
  var index_x = [];
  var jumlahX = 0;
  var jumlahO = 0;
  var jarak = [];
  for (var i = 0; i < arr.length; i++) { // menghitung jumlah x
    if (arr[i] === "x") {
      jumlahX += 1;
    }
  }
  for (i = 0; i < arr.length; i++) { // menghitung jumlah o
    if (arr[i] === "o") {
      jumlahO += 1;
    }
  }
  if (jumlahX === 0 || jumlahO === 0 ){
      return 0;
  }
  for (i = 0; i < jumlahX; i++) { // mencatat posisi x
    if (i === 0) {
      index_x[i] = arr.indexOf("x");
    } else {
      index_x[i] = arr.indexOf("x", index_x[i - 1] + 1);
    }
  }

  for (i = 0; i < jumlahO; i++) { // mencatat posisi o
    if (i === 0) {
      index_o[i] = arr.indexOf("o");
    } else {
      index_o[i] = arr.indexOf("o", index_o[i - 1] + 1);
    }
  }
  for (i = 0; i < jumlahX; i++) {
    for (j = 0; j < jumlahO; j++) {
      if (index_x[i] > index_o[j]) {
        jarak.push(index_x[i] - index_o[j]);
      } else {
        jarak.push(index_o[j] - index_x[i]);
      }
    }
  }
  jarak.sort(function(a, b) {return a - b;});
  return jarak[0];
}

// TEST CASESc
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
