/*
    Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang 
    terdiri dari karakter. Function akan me-return jarak spasi antara 
    karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah 
    ['x', '', 'o', '', '', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
    Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

 */

function targetTerdekat(arr) {
    // you can only write your code here!
    var tampungX = 0;
    var tampungO = 0;

    for(i=0;i<arr.length;i++){
        // console.log(i+' '+arr[i])
        if (arr[i]=='o') {
            tampungO = i+1
        } else if (arr[i]=='x') {
            tampungX = i+1;
            break;
            
        }
        
    }

    if (tampungX==0) {
        return 0
    }else if (tampungO==0) {
        for(j=arr.length-1;j>=0;j--){
            if (arr[j]=='o') {
                tampungO = j+1
            }else if(arr[j]=='x'){
                tampungX = j+1
                break;
            }
            
            
        }
        return tampungO - tampungX
        
    }
    
return tampungX - tampungO
    
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2