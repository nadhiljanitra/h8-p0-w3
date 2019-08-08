function angkaPalindrome(num) {
  var sisa = 0;
  var num2 = 0;
  do {
    var hasil = 0; // mereset nilai hasil dari input sebelumnya
    num2 = num; // karena num2 menjadi 0, harus dikembalikan ke perhitungan selanjutnya (num+1)
    num2 = num2 + 1; // mengecek num selanjutnya
    num = num + 1; // mengecek num selanjutnya
    while (num2 > 0) {
      sisa = num2 % 10;
      num2 = parseInt(num2 / 10);
      hasil = hasil * 10 + sisa;
    }
  } while (num !== hasil);

  return hasil;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
