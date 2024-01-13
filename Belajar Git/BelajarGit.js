console.log('Belajar Git');

// 1. git diff -> Melihat Perbedaan atau update pada code file.
// 2. git log -> Melihat History Commit
// 3. git log --oneline -> Melihat History Commit secara singkat
// 4. git restore -> Membatalkan perubahan code / mengembalikan code ke perubahan terakhir pas commit.
// 5. git restore -S -> Membatalakan perubahan pada file/code yang telah di git add (sudah masuk ke Sketching area)
// 6. git reset --hard kodehas -> Mengembalikkan ke Commit tertentu
// 7. MEMBUAT BRANCH
// 7A. git checkout -b feature/penjumlahan -> maka setelah itu kita sudah masuk ke Branch penjumlahan.
// Setelah itu kita dapat membuat fiturnya namun kita bekerja secara sendiri atau tidak terhubung ke Master
// 7B. Setelah fitur tesebut jadi, kita pun melakukan proses commit seperti biasanya.
// 7C. Jika kita merasa fitur tersebut sudah bagus dan kita ingin menggabungkannya ke Master,
// Kita dapat kembali dlu ke Master menggunakan: git checkout master. Nah disini, fitur yang kita buat tidak akan muncul.
// 7D. Untuk memunculkannya, kita dapat menggunakan: git merge feature/penjumlahan

const add = (a, b) => a + b;
console.log(add(1, 4));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
