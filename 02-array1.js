function balikString(kata) {
    
    // return kata.split('').reverse().join('') // menggunakan reverse
    
    let output = '';
    for (let i = kata.length-1;i>=0;i--) { //menggunakan loop
        output = output + kata[i]
    }
    return output

}

console.log(balikString('Hello world!')) //!dlrow olleH