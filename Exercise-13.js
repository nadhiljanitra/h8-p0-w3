function targetTerdekat(arr) {
  
  var index_x1 = arr.indexOf('x')
  var index_x2 = arr.lastIndexOf('x')
  var index_o = arr.indexOf('o')
  
    if (index_x1 === -1) {
     return 0;
    }
  
    if (index_x1 > index_o) {
        var jarak1 = index_x1 - index_o 
    } else if (index_x1 < index_o) {
        var jarak1 = index_o - index_x1
    }  

    if (index_x2 > index_o) {
        var jarak2 = index_x2 - index_o 
    } else if (index_x2 < index_o) {
        var jarak2 = index_o - index_x2
    }
 
    if (jarak1 < jarak2) {
        return jarak1;
    } else {
        return jarak2;
    }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

