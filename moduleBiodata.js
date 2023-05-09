// Import module biodata dari module-biodata.js
const biodata = require('./biodata');

// Menampilkan data biodata
const data = biodata.biodata('Rio Widianto', 'Bandung', '14 Desember 2002', 'Jl.Paseh - Kamojang');
console.log(`Nama            : ${data.nama}`);
console.log(`Tempat Lahir    : ${data.tempatLahir}`);
console.log(`Tanggal Lahir   : ${data.tanggalLahir}`);
console.log(`Alamat          : ${data.alamat}`);

// kode dibawah jika yg diekspor nya object
// console.log(`Nama            : ${biodata.nama}`);
// console.log(`Tempat Lahir    : ${biodata.tempatLahir}`);
// console.log(`Tanggal Lahir   : ${biodata.tanggalLahir}`);
// console.log(`Alamat          : ${biodata.alamat}`);
