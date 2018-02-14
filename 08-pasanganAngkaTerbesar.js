function pasanganTerbesar(num) {
    // you can only write your code here!
    var numString = String(num);
    var tampung;
    var banding = 0;
    for(var i=0;i<numString.length;i++){
        tampung = Number(numString[i] + numString[i+1])
        // console.log(tampung)
        if (tampung>banding) {
            banding=tampung
        }
    }

    return banding;
    
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99