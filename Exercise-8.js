function pasanganTerbesar(num) {
    var snum = num.toString();
    var isi =[]
    for (i=0;i < snum.length; i++) {
        isi.push(parseInt(snum[i]+snum[i+1]));
    }
    var urut = isi.sort(function(value1,value2){return value1<value2})
    var terbesar = urut.slice(0,1)
    var hasil = parseInt(terbesar)
    return hasil;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99



