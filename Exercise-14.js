function mengelompokkanAngka(arr) {
    var hasil = [[],[],[]]
  for (i=0; i < arr.length; i++){

    var kelipatan = arr[i]%3 === 0
    var cek = arr[i]%2;
    if (kelipatan) {
        hasil[2].push(arr[i]);
    } else if (cek === 0){
        hasil[0].push(arr[i]);
    } else if (cek === 1){
        hasil[1].push(arr[i]);
    }
  }
  return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]


