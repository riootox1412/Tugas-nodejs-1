// module untuk di ekspor ke biodata.js
exports.biodata = function (nama, tempatLahir, tanggalLahir, alamat) {
  return {
    nama: nama,
    tempatLahir: tempatLahir,
    tanggalLahir: tanggalLahir,
    alamat: alamat,
  };
};

// kode dibawah jika ingin yg diekspor adalah obejct
// const biodata = {
//   nama: 'Rio Widianto',
//   tempatLahir: 'Bandung',
//   tanggalLahir: '14 Desember 2002',
//   alamat: 'Jl.Paseh - Kamojang',
// };

// module.exports = biodata;

// console.log(biodata);
