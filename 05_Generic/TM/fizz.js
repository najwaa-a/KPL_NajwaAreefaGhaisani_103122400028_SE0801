// Tambah JSDoc di sini
/**
 * @param {number} value bilangan yang akan diubah
 * @returns {string|number} mengembalikan fizz, buzz, fizzbuzz atau angka itu sendiri 
 * 
 */

function zzzzOrNum(value) {
    if (typeof value !== "number") {
        throw new Error("input harus berupa angka");
    }
    if ( value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * @param {number[]} sequence array yang berisi bilangan bulat
 * @returns {(string|number)[]} array yang berisi campuran antara string dan angka  
 * 
 */
function fizzBuzz(sequence) {
    // Ubah kode di sini

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};