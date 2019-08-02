function angkaPalindrome(num) {
    var num1,hasil,hasil2=0;
    num1 = num;
    num2 = num;
    while(num>0) {  // Untuk palindrom number input
        rem = num%10;
        num = parseInt(num/10)
        hasil = hasil*10+rem;
    }
    if (num !== hasil){
        do {
            hasil2=0 // mereset nilai hasil2 dari input sebelumnya
            num2=num1 // karena num2 menjadi 0, harus dikembalikan ke perhitungan selanjutnya (num+1)
            num2=num2+1 // mengecek num selanjutnya
            num1=num1+1 // mengecek num selanjutnya
            while(num2>0) {
                sisa = num2%10;
                num2 = parseInt(num2/10)
                hasil2 = hasil2*10+sisa;
            }
        }
        while (num1 !== hasil2);
    } else {
        do {
            hasil2=0
            num2=num1
            num2=num2+1
            num1=num1+1
            while(num2>0) {
                sisa = num2%10;
                num2 = parseInt(num2/10)
                hasil2 = hasil2*10+sisa;
            }
        }
        while (num1 !== hasil2);
    }
 return hasil2;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
