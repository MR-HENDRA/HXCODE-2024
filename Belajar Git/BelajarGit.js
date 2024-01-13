console.log('Belajar Git');

// 1. git diff -> Melihat Perbedaan atau update pada code file.
// 2. git log -> Melihat History Commit
// 3. git log --oneline -> Melihat History Commit secara singkat
// 4. git restore -> Membatalkan perubahan code / mengembalikan code ke perubahan terakhir pas commit.
// 5. git restore -S -> Membatalakan perubahan pada file/code yang telah di git add (sudah masuk ke Sketching area)
// 6. git reset --hard kodeCommit -> Mengembalikkan ke Commit tertentu
// 7. MEMBUAT BRANCH
// 7A. git checkout -b feature/penjumlahan -> maka setelah itu kita sudah masuk ke Branch penjumlahan.
// Setelah itu kita dapat membuat fiturnya namun kita bekerja secara sendiri atau tidak terhubung ke Master
// 7B. Setelah fitur tesebut jadi, kita pun melakukan proses commit seperti biasanya.
// 7C. Jika kita merasa fitur tersebut sudah bagus dan kita ingin menggabungkannya ke Master,
// git checkout master -> Kita dapat kembali dlu ke Master. Nah disini, fitur yang kita buat tidak akan muncul.
// 7D. git merge feature/penjumlahan -> Untuk memunculkannya/menggabungkan ke Master.
// 8A. git revert kodeCommit -> Merevisi Commit tertentu tanpa mengganggu commit terakhir.
// 8B. Setelah merubah codenya, kita kembali commit ulang seperti biasa.
// 9. cd .. -> kembali ke bagian sebelumnya
// 10. MEMBUAT REPOSITORY
// 10. git status -> git add . -> git status -> git commit -m "keteranganCommit" -> git remote add origin https://github.com/MR-HENDRA/HXCODE-2024.git -> git push -u origin master
// 11. rm -rf NamaFolder -> Menghapus folder
// 12. git clone "link clone code" -> Meng clone Repository
// 13. git push -> update perubahan pada git lokal ke github
const add = (a, b) => a + b;
console.log(add(1, 4));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

const divide = (a, b) => a / b;
console.log(divide(4, 3));

const divide02 = (a, b) => a / b;
console.log(divide02(4, 3));

const subtract = (a, b) => a - b;
console.log(subtract(5, 6));

console.log('LAST UPDATE');
