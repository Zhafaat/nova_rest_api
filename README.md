    --membuat direktori dan lokal repository
langkah awal membuat sebuah project adalah menyiapkan direktori project. Kemudian direktori dibuatkan repository Git menggunakan cmd `git init` pada terminal direktori saat ini. Cmd ini berarti menginisialisasi sebuah direktori sebagai repositori Git, membuat direktori .git yang berisi informasi tentang konfigurasi dan sejarah revisi dari project.
    --package.json
pada direktori tambahkan file package.json. dengan menjalankan cmd `npm init -y` pada terminal. 
NPM (Node Package Manager) adalah sistem manajemen paket (package manager) untuk aplikasi JavaScript yang berjalan di environment Node.js. Ini membantu pengembang untuk mengelola dependensi dan menginstal paket yang dibutuhkan untuk aplikasi mereka.
package.json adalah file yang berisi informasi tentang aplikasi dan dependensinya. Ini mencakup informasi seperti nama aplikasi, versi, deskripsi, dan daftar dependensi yang dibutuhkan. Ini juga digunakan oleh NPM untuk mengelola dan memperbarui dependensi aplikasi.
    --repository GitHub
selanjutya, menghubungkan lokal repository dengan global repository yaitu GitHub.
Pertama buat repository baru di akun GitHub. Setelah terbuat, secara otomatis akan di tampilkan tutorial untuk menghubungkan local repository Anda dengan GitHub.
Anda harus memilih salah satu jalur yang disediakan, dan menjalankan cmd yang di sediakan satu per satu di terminal Anda.
    --npm i
jelankan cmd `npm i sequelize mysql express cors` dimana perintah pada command line interface (CLI) Node Package Manager (npm) yang digunakan untuk menginstal paket-paket Node.js. Ini berarti:
`sequelize`: adalah library ORM (Object-Relational Mapping) untuk Node.js yang memudahkan pembuatan dan manipulasi database dalam aplikasi.
`mysql`: adalah driver database untuk MySQL yang digunakan oleh Sequelize untuk berkomunikasi dengan database MySQL.
`express`: adalah framework web untuk Node.js yang mempermudah pembuatan aplikasi web.
`cors`: adalah library untuk Node.js yang mempermudah mengatur akses Cross-Origin Resource Sharing (CORS) dalam aplikasi web.
Setelah menjalankan perintah `npm i`, paket-paket tersebut akan diunduh dan disimpan sebagai dependensi pada direktori project, dan dapat digunakan dalam aplikasi Anda.
    --node_modules
folder node_modules akan terbuat secara otomatis setelah menjalankan perintah `npm i`. Folder ini memiliki ukuran yang besar dan dapat memperlambat proses commit di repository, oleh karena itu Anda perlu membuat file .gitignore dan menuliskan node_modules didalamnya.
Tindakan ini akan mengeliminasi folder node_modules dari proses commit di repository.
    --migration database
jalankan cmd `npm i --save-dev sequelize-cli` yaitu perintah pada command line interface (CLI) Node Package Manager (npm) yang digunakan untuk menginstal paket Sequelize CLI. --save-dev adalah opsi yang digunakan untuk menandai bahwa paket tersebut hanya dibutuhkan untuk lingkungan pengembangan, bukan lingkungan produksi.
kemudian jalankan cmd `npx sequelize-cli init`
`sequelize-cli init` adalah perintah Sequelize CLI yang digunakan untuk membuat struktur direktori dan berkas konfigurasi yang dibutuhkan oleh Sequelize untuk bekerja dengan database. Ini akan membuat direktori `config` yang berisi file konfigurasi database, dan direktori models yang berisi definisi model-model aplikasi Anda.
Setelah menjalankan `npx sequelize-cli init`, Anda akan memiliki struktur direktori yang dibutuhkan untuk memulai bekerja dengan Sequelize dan mengelola database Anda.
    --membuat database
Ubah file config/config.json, sesuaikan informasi login dengan informasi server MySQL Anda,
jalankan cmd `npx sequelize db:create` yaitu perintah CLI Sequelize yang digunakan untuk membuat database baru. Ini akan membuat database baru dengan nama yang ditentukan dalam file konfigurasi config.json.
Perintah ini harus dijalankan setelah Anda berhasil membuat koneksi dengan server MySQL dan sudah memiliki file konfigurasi config.json yang dikonfigurasi dengan informasi login dan nama database yang diinginkan.

apabila anda belum menginstal librari mysql2, maka jalankan cmd `npm i mysql2` yaitu perintah NPM yang digunakan untuk menginstal modul mysql2 sebagai dependensi project Anda. Modul ini adalah implementasi JavaScript dari klien MySQL yang dapat digunakan untuk mengkoneksikan aplikasi Node.js dengan server MySQL.
Setelah menjalankan perintah npm i mysql2, modul mysql2 akan ditambahkan ke daftar dependensi proyek Anda di file package.json, dan bisa digunakan. 
apabila librari mysql2 sudah terinstal jalankan cmd `npx sequelize db:create`
    --membuat tabel kategoris, tabel products, dan tabel stocks
untuk membuat tabel pada sequelize, jalankan cmd `npx sequelize model:generate` yaitu perintah CLI Sequelize yang digunakan untuk membuat skema tabel baru di database. Ini akan membuat file model baru yang menentukan struktur dan atribut dari tabel yang akan dibuat.
buat tabel kategoris, tabel products, dan tabel stocks dengan cmd:
`npx sequelize model:generate --name tabelName --attributes coloum1Name:coloum1Type,coloum2Name:coloum2Type,coloum3Name:coloum3Type`
Perintah di atas akan membuat file model baru dengan nama `tabelName.js`beserta file migration yang menentukan struktur tabel dengan atribut sesuai nama dan jumlah kolom yang didefinisikan. 
masuk ke dalam file migration di folder migrations, tambahkan property pada setiap kolom seperti primaryKey, allowNull, references (pada kolom foreignKey jika ada)
Setelah membuat file model, Anda harus menjalankan perintah `npx sequelize db:migrate` untuk membuat tabel yang sesuai dengan skema dalam file model.
    --membuat tabel transakses
Untuk menyimpan data transaksi yang terjadi, buat tabel baru dengan kolom id, product_id, tanggal_transaksi, stock_keluar, dan total_harga.
lakukan prosedur pembuatan tabel seperti dipenjelasan sebelumnya.


