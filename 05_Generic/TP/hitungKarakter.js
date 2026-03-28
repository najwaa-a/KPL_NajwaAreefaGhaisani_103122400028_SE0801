/* fungsi awal: 
const str = "Bar bar";

let jumlahSemua = 0;
for (const c of str) { 
    jumlahSemua++; 
}
console.log(total);

let jumlahHuruf = 0;
for (const c of str) { 
    if (c === ' ') continue;
    jumlahHuruf++;
}
console.log(letters);

-----------------------------------------------------*/
// menggunakan Generic: 

const str = "Bar bar bar";

function hitung(str, mode) { //jadi mode ini tu buat nentuin kita mau ngitung semua karakter atau cuma hurufnya aja
  let total = 0;
  for (const c of str) {
    if (mode === "huruf") {
      if (c === " ") continue;
      total++;
    } else if (mode === "semua") {
      total++;
    }
  }
  return total;
}

//ini contoh buat test 
console.log(hitung(str, "semua")); // outputnya bakalan 11
console.log(hitung(str, "huruf")); // outputnya bakalan 9
hitung(str, "huruf"); // ini nggak bakal terjadi apa-apa 