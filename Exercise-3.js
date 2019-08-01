var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(id,nama,tempat,tanggal,hobi){
    for (i=0;i<input.length;i++){
        id=input[i][0]
        nama=input[i][1]
        tempat=input[i][2]
        tanggal=input[i][3]
        hobi=input[i][4]
        console.log(`Nomor ID: ${id}`)
        console.log(`Nama Lengkap: ${nama}`)
        console.log(`TTL: ${tempat} ${tanggal}`)
        console.log(`Hobi: ${hobi}`)
        console.log('\n')
    }   
}
dataHandling()

