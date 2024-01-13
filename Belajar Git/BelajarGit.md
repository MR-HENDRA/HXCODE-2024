1. git diff -> Melihat Perbedaan atau update pada code file.
2. git log -> Melihat History Commit
3. git log --oneline -> Melihat History Commit secara singkat
4. git restore -> Membatalkan perubahan code / mengembalikan code ke perubahan terakhir pas commit.
5. git restore -S -> Membatalakan perubahan pada file/code yang telah di git add (sudah masuk ke Sketching area)
6. git reset --hard kodeCommit -> Mengembalikkan ke Commit tertentu
7. MEMBUAT BRANCH
   7A. git checkout -b feature/penjumlahan -> maka setelah itu kita sudah masuk ke Branch penjumlahan.
   Setelah itu kita dapat membuat fiturnya namun kita bekerja secara sendiri atau tidak terhubung ke Master
   7B. Setelah fitur tesebut jadi, kita pun melakukan proses commit seperti biasanya.
   7C. Jika kita merasa fitur tersebut sudah bagus dan kita ingin menggabungkannya ke Master,
   git checkout master -> Kita dapat kembali dlu ke Master. Nah disini, fitur yang kita buat tidak akan muncul.
   7D. git merge feature/penjumlahan -> Untuk memunculkannya/menggabungkan ke Master.
   8A. git revert kodeCommit -> Merevisi Commit tertentu tanpa mengganggu commit terakhir.
   8B. Setelah merubah codenya, kita kembali commit ulang seperti biasa.
8. cd .. -> kembali ke bagian sebelumnya
9. MEMBUAT REPOSITORY
10. git status -> git add . -> git status -> git commit -m "keteranganCommit" -> git remote add origin https://github.com/MR-HENDRA/HXCODE-2024.git -> git push -u origin master
11. rm -rf NamaFolder -> Menghapus folder
12. git clone "link clone code" -> Meng clone Repository
13. git push -> update perubahan pada git lokal ke github
14. KERJA SECARA TIM
    14A. Misal saya adalah Dev B yang bekerja secara Tim pada sebuah Repository Pembuatan Aplikasi.
    Ketika saya ingin membuat sebuah Fitur, maka saya terlebih dahulu membuat sebuah branch.
    14B. git checkout -b feature/mathSin -> membuat branch di lokal, lalu membuat fiturnya.
    14C. Setelah fitur tersebut jadi maka saya akan meng-commit nya seperti biasa.
    (git status -> git add . -> git status -> git commit -m "...")
    14D. git push origin feature/mathSin -> melakukan request ke Dev A atau Dev2 yang tergabung dalam Repository
    14E. git checkout master -> Kembali ke branch Master dan Kode pada pembuatan feature tadi belum muncul di Master kita
    15F. Masuk ke Github, lalu klik untuk pull request dan Dev A dan lainnya akan melihatnya.
    Jika setuju, Dev A akan mengACC nya dengan mengklik merge -> Maka kode akan tergabung dalam Github
15. git pull origin master -> menyesuaikan code yang ada di github dengan lokal kita -> Maka feature tadi akan
    muncul di lokal kita
