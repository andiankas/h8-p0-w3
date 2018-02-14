function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var baru = [];
    var jarak = arr[1]-arr[0];

    for(i=arr[0];i<=arr[arr.length-1];i+=jarak){
        baru.push(i);
    }
    // if (String(baru)==String(arr)) {
    //     return true;
    // } else {
    //     return false
    // }
    return String(baru) == String(arr)
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
