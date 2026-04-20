const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const tanggalHariIni = formatter.format(new Date());

console.log(tanggalHariIni);