const editorElement = document.getElementById("editor-kecil"); // ini buat manggil element dengan id "editor-kecil" dan disimpen ke dalam variabel editorElement.
const charCountElement = document.getElementById("hf"); 
const uppercaseCountElement = document.getElementById("hb");
const lowercaseCountElement = document.getElementById("hk");

// ini buat manggil tombol besarkan dan kecilkan
const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

function hitungHuruf(event) {
  const text = event.target.value;
  const chr = text.split(""); // ini buat mecah jadi array karakter. misal hello bakalan jadi ['h', 'e', 'l', 'l', 'o'].

  // let ini fungsi nya buat deklarasi variabel yang nilainya bisa berubah.
  let jmlHurufSejati = 0;
  let jmlHurufBesar = 0;
  let jmlHurufKecil = 0;

  // si /\s/ ini tu namanya regex (regular expression) buat nyocokin karakter spasi kalau ada spasi bakalan diabaikan. 
  const spasi = /\s/;
  // ini tu bentuk regex (regular expression) buat nyocokin karakter huruf besar dan kecil
  const besar = /[A-Z]/;
  const kecil = /[a-z]/;

  // kalau si chr.forEach ini tu buat ngecek setiap karakter yang ada di dalam array chr.
  chr.forEach((char) => {
    if (spasi.test(char)) return; // kalau karakter yang dicek itu spasi maka langsung return atau diabaikan. 

    if (besar.test(char)) jmlHurufBesar++; 
    if (kecil.test(char)) jmlHurufKecil++; 

    jmlHurufSejati++;
  });

  charCountElement.textContent = jmlHurufSejati;
  uppercaseCountElement.textContent = jmlHurufBesar; 
  lowercaseCountElement.textContent = jmlHurufKecil;  
}

editorElement.addEventListener("input", hitungHuruf); 

// yang ini ketika tombol 'besarkan' di klik maka teks yang udah kita ketik bakalan jadi huruf kapital semua
btnBesar.addEventListener("click", () => {
  const text = editorElement.value;
  editorElement.value = text.toUpperCase();
});

// yang ini ketika tombol 'kecilkan' di klik maka teks yang udah kita ketik bakalan jadi huruf kecil semua
btnKecil.addEventListener("click", () => {
  const text = editorElement.value;
  editorElement.value = text.toLowerCase();
});
