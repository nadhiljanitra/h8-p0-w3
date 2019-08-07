function balikString(text) {
    var isi = ''
    for (var i = text.length-1; i >=0; i--) {
        isi += text[i] 
    }
    return isi;
}
console.log(balikString('hello world!'))