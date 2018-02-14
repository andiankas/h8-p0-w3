function hitungJumlahKata(kalimat) {
    
    //menggunakan split
    var pecah = kalimat.split(' ').length
    return pecah;


    //menggunakan cara perulangan atau tidak menggunakan looping
    // var tampung = 0;
    // for(i=0;i<=kalimat.length;i++){
    //     if (kalimat[i]==' ') {
    //         tampung = 
    //     }
    // }
    // return tampung + 1

}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5