/*
 Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array 
 yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan 
 kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z 
 (jika ada).Untuk kasus ini, anggap saja semua teks lowercase.

Contoh jika arr inputan adalah ["ayam", "kucing", "bebek", "bangau", "zebra"] 
maka output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

 */

function groupAnimals(animals) {
    // you can only write your code here!
    var output = [];
    

    for(i=0;i<animals.length;i++){
       console.log(animals[i])
    }
    // return ubah
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]