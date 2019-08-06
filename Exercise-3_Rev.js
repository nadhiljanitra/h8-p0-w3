var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(data){
    for (i=0;i<data.length;i++){
        id=data[i][0]
        nama=data[i][1]
        tempat=data[i][2]
        tanggal=data[i][3]
        hobi=data[i][4]
        console.log(`Nomor ID: ${id}`)
        console.log(`Nama Lengkap: ${nama}`)
        console.log(`TTL: ${tempat} ${tanggal}`)
        console.log(`Hobi: ${hobi}`)
        console.log('\n')
    }   
}
dataHandling(input)

