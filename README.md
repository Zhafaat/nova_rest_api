documentasi API

GET
stockProduct
http://localhost:3000/kategoris/stockProduct
lihat stock product

GET
stockProduct by id
http://localhost:3000/kategoris/stockProduct/1
lihat satu stock product per id

GET
transaksi
http://localhost:3000/transaksis/transaksi
lihat semua laporan penjualan product

GET
transaksi by id
http://localhost:3000/transaksis/transaksi/3
lihat satu laporan penjualan product per bulan per transaksi id

GET
transaksi in a month
http://localhost:3000/transaksis/transaksiPerBulan
laporan penjualan product per bulan
Body
urlencoded
month
2

GET
productKategoris
http://localhost:3000/products/productKategoris
lihat semua product per kategori

GET
productKategoris by id
http://localhost:3000/products/productKategoris/3
lihat satu product kategori per id    

    
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
    --dummy/Data Faker
data faker dibuat didalam folder data_faker. Data dibuat per file per tabel, penamaan file javascript sesuai dengan nama tabel. Data dibuat menggunakan kode JavaScript yang membuat sebuah class bernama "namaTabelData". class ini memiliki sebuah constructor yang menetapkan properti bernama "dataFaker" sebagai tempat nenuliskan data tabel dalam array of objects. Setelah kelas didefinisikan, ia di-export sebagai modul menggunakan pernyataan "module.exports".
Dengan kata lain, kelas ini akan membuat sebuah objek yang mewakili kategori data dan memiliki properti dataFaker sebagai array of objects yang dapat diakses oleh modul lain.
    --seeders
cmd "npx sequelize seed:generate --name namafile" adalah perintah CLI (Command Line Interface) untuk membuat file seed baru pada aplikasi Sequelize.
file seeder berfungsi untuk menambahkan data faker ke dalam tabel yang telah dibuat. Didalam filenya Anda perlu mengimport file dari data_faker yang berisi data yang akan diinsert ke tabel. 
`async up (queryInterface, Sequelize)` adalah fungsi untuk menambahkan data pada tabel. Dalam fungsi ini, Anda perlu membuat objek berisikan dataFaker dan memanggil fungsi `await queryInterface.bulkInsert()` untuk menambahkan data yang ditentukan dalam file seeder ke dalam tabel.
`async down (queryInterface, Sequelize)` adalah fungsi untuk menghapus semua data pada tabel. Dalam fungsi ini, memanggil fungsi `await queryInterface.bulkDelete()` untuk menghapus semua data pada tabel.
    --mengisi data faker ke dalam tabel
Jalankan perintah "npx sequelize db:seed:all" untuk menjalankan semua file seed yang ada pada aplikasi.
Atau, jalankan perintah "npx sequelize db:seed --seed namafile" untuk menjalankan file seed tertentu yang ingin dijalankan.
Dengan menjalankan salah satu perintah tersebut, akan mengisi data yang telah ditentukan pada file seed ke dalam tabel yang sesuai pada aplikasi.
    --file index.js untuk menjalankan server
pada file ini Anda perlu mengimport express, cors, menggunakan sintsaks: 
`const express = require('express')`
`const cors = require('cors')`
`const app = express()` membuat instance dari aplikasi Express.
`app.use(cors())` menambahkan CORS sebagai middleware aplikasi.
`app.listen(port, () => { ... })` memulai server aplikasi dan mendengarkan permintaan dari client pada port yang ditentukan.
    --membuat request API
proses pembuatan dimulai dari membuat folder routes, folder ini berisikan file js untuk membuat router API per tabel.
setiap file berisian 
`const { Router } = require("express");` : menggunakan destructuring assignment untuk mengambil objek Router dari module express yang di-require.
`const router = Router()` : membuat instance dari objek Router dengan menggunakan method Router().
`module.exports = router;`: mengekspor objek router sehingga dapat digunakan di module lain.

`router` berguna untuk memilah pembuatan API sehingga semua codingan API tidak harus bertumpuk di satu file.

untuk membuat satu API, harus ditentukan :
1. method, pada codingan yang saya buat hanya menggunakan method get karena fungsi yang diminta adalah menampilkan data dari database. akan tetapi masih ada beberapa method lainnya yang bisa di gunakan peserti post, put, dan delete.
2. path: untuk satu jenis method di beberapa API sebaiknya memiliki path yang berbeda-beda, untuk path yang saya buat saya sesuaikan dengan fungsi API yang diminta.
3. callback function, function memiliki parameter req, res, dan next. functioon ini berguna untuk menangani permintaan dari user (req), dan memberikan hasil sesuai dengan kebutuhan user (res). Callback function ini dibuat didalam class pada folder controller. sehingga bisa funtionnya bisa digunakan berulang-ulang dimana file manapun dan mengurangi tindakan DRY.

semua API yang dibuat ditiap filenya masing-masing di kumpulkan di dalam file index.js di folder routes kemudian berikan path tambahan yaitu nama tabelnya masing-masing. untuk penambahan path ini digunakan middleware dari express (use).

muara terakhir dari API yaitu di file index.js tempat server dijalankan. semua router di panggil dengan mengimport router dari folder routes.
`const router = require('./routes');`
untuk menjalankan server bisa dengan menggunakan cmd `node index.js` atau `nodemon index.js` pada terminal project Anda. 
    --errorHandler
errorHandler adalah sebuah function pada class middleware didalam file middleware.js difolder middleware. function middleware memiliki 4 parameter: `err`, `req`, `res`, dan `next`.
function ini digunakan sebagai middleware untuk menangani error pada aplikasi. Error bisa datang dari berbagai sumber seperti database, operasi yang tidak valid, atau kesalahan server. 
funtion ini bertindak sebagai middleware dan membutuhkan `next` sebagai parameter untuk memastikan bahwa proses pemrosesan request tetap berlanjut setelah error ditangani.





