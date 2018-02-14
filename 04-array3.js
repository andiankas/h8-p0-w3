
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,1,'Roman Alamsyah Elsharawy');
    input.splice(2,1,'Provinsi Bandar Lampung');
    input.splice(4,1, 'Pria' , 'SMA Internasional Metro')
    console.log(input)

    var bulan = input[3].split('/')
    switch (bulan[1]) {
        case '01': {(bulan = 'Januari');break;}
        case '02': {(bulan = 'Februari');break;}
        case '03': {(bulan = 'Maret');break;}
        case '04': {(bulan = 'April');break;}
        case '05': {(bulan = 'Mei');break;}
        case '06': {(bulan = 'Januari');break;}
        case '07': {(bulan = 'Januari');break;}
        case '08': {(bulan = 'Januari');break;}
        case '09': {(bulan = 'Januari');break;}
        case '10': {(bulan = 'Januari');break;}
        case '11': {(bulan = 'Januari');break;}
        case '12': {(bulan = 'Januari');break;}
    
        default: {bulan = 'Bulan tidak teridentifikasi'}break;
    }
    console.log(bulan)

    var bulanSort = input[3].split('/')
    console.log(bulanSort.sort(function (value1, value2) { return parseInt(value1) < parseInt(value2) }))

    // var bulanSort2 = []
    // for(i=bulanSort.length;i>=0;i--){
    //     console.log(bulanSort[i])     
    // }

    var strip = input[3].split('/').join('-')
    console.log(strip)
   
    var ubahKeString = input.toString()
    var irisan = ubahKeString.slice(5,19)
    console.log(irisan)
    
}

dataHandling2(input);