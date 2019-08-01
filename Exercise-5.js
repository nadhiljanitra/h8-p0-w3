function palindrome(kata) {
    var isi=''
    for (i = kata.length-1; i >= 0; i--){
        isi += kata[i]
    }
    if (isi === kata){
        var hasil = true;
    } else {
        var hasil = false;
    }
    return hasil;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false