/*TUGAS 
1. buat promp untuk mengetahui saldo akhir dari apa yang di input kan oleh user
2. buat program menentukan hari yang ada saat hari ini di pc kalian
3. buat program menentukan usia yang di inputonkan oleh user
4. buat program untuk cek nilai dan predikat
5. buat program untuk mengecek nama siswa menggunakan Array

tugas 1
let saldoAwal = prompt('Masukkan saldo awal');
let saldoTambahan = prompt('Masukkan saldo tambahan');

saldoAwal = parseInt(saldoAwal);
saldoTambahan = parseInt(saldoTambahan);
const saldoAkhir = saldoAwal + saldoTambahan;

alert(`Saldo akhir adalah ${saldoAkhir}`);

TUGAS ke 2 
let i = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'] 
let hari = new Date().getDay();
console.log(i[hari])

Tugas ke 3 
let usia = prompt(`masukan umur kamu`)
usia = parseInt(usia)

if (usia < 13) {
    alert(`Kamu masih anak-anak`);
} else if (usia <= 17) {
    alert(`Kamu sudah remaja`);
} else {
    alert(`Kamu sudah dewasa`);
}

/tugas ke 4 
let nilai = prompt(`masukan nilai kamu`);
nilai = parseInt(nilai);

if (nilai > 90) {
    alert(`Nilai kamu A (sangat baik)`)
} else if (nilai > 80) {
    alert(`Nilai kamu B (baik)`)
} else if (nilai > 70) {
    alert(`Nilai kamu C (cukup)`)
} else if (nilai > 60) {
    alert(`Nilai kamu D (kurang)`)
} else {
    alert(`Nilai kamu E (kurang sekali)`)
}

tugas ke 5 
let namaSiswa = ['Raisya', 'Leona', 'Rizky', 'Hanifah', 'Rahmat'];
let namaInput = prompt('Masukkan nama kamu');

if (namaSiswa.includes(namaInput)) {
  alert(`Halo ${namaInput}, selamat datang di kelas 12`);
} else {
  alert('Nama tidak ditemukan di daftar siswa');
}
  */