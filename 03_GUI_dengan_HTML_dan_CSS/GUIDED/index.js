const editorElement = document.getElementById("editor-kecil"); // ini buat manggil element dengan id "editor-kecil" dan disimpen ke dalam variabel editorElement.
const charCountElement = document.getElementById("hf"); 
const uppercaseCountElement = document.getElementById("hb");
const lowercaseCountElement = document.getElementById("hk");

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

    if (besar.test(char)) jmlHurufBesar++; // kalau karakter yang dicek itu huruf besar maka jmlHurufBesar bakalan nambah 1.
    if (kecil.test(char)) jmlHurufKecil++; // kalau karakter yang dicek itu huruf kecil maka jmlHurufKecil bakalan nambah 1.

    jmlHurufSejati++;
  });

  charCountElement.textContent = jmlHurufSejati;
  uppercaseCountElement.textContent = jmlHurufBesar; 
  lowercaseCountElement.textContent = jmlHurufKecil;  
}

editorElement.addEventListener("input", hitungHuruf); 


// ini buat tombol 
btnParagraph.addEventListener("click", function () {
  let text = editorElement.value.toLowerCase(); // ini buat ngubah semua karakter yang ada di dalam editorElement jadi huruf kecil dulu. misal HELLO bakalan jadi hello.
  if (text.length > 0) { // terus disini buat ngecek kalau text itu panjangnya lebih dari 0 atau ada isinya, baru deh lanjut ke proses selanjutnya.
    text = text.charAt(0).toUpperCase() + text.slice(1); // ini buat ngubah karakter pertama dari text jadi huruf besar, terus sisanya tetep huruf kecil. misal hello world bakalan jadi Hello world.
    editorElement.value = text;
    editorElement.dispatchEvent(new Event("input")); 
  }
});