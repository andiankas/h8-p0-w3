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
    var srt = animals.sort()
    var output = [];
    var isi = []

    for (var i = 0; i < animals.length; i++) {

        if (i !== animals.length - 1) {

            if (animals[i][0] === animals[i + 1][0]) {

                isi.push(animals[i])

            } else {

                isi.push(animals[i])
                output.push(isi)
                isi = []

            }

        } else {

            isi.push(animals[i])
            output.push(isi)

        }


    }


    return output
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]