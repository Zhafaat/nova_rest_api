langkah awal membuat sebuah project adalah menyiapkan direktori project. Kemudian direktori dibuatkan repository Git menggunakan cmd `git init` pada terminal direktori saat ini. Cmd ini berarti menginisialisasi sebuah direktori sebagai repositori Git, membuat direktori .git yang berisi informasi tentang konfigurasi dan sejarah revisi dari project.

pada direktori tambahkan file package.json. dengan menjalankan cmd `npm init -y` pada terminal. 
NPM (Node Package Manager) adalah sistem manajemen paket (package manager) untuk aplikasi JavaScript yang berjalan di environment Node.js. Ini membantu pengembang untuk mengelola dependensi dan menginstal paket yang dibutuhkan untuk aplikasi mereka.
package.json adalah file yang berisi informasi tentang aplikasi dan dependensinya. Ini mencakup informasi seperti nama aplikasi, versi, deskripsi, dan daftar dependensi yang dibutuhkan. Ini juga digunakan oleh NPM untuk mengelola dan memperbarui dependensi aplikasi.

selanjutya, menghubungkan lokal repository dengan global repository yaitu GitHub.
Pertama buat repository baru di akun GitHub. Setelah terbuat, secara otomatis akan di tampilkan tutorial untuk menghubungkan local repository Anda dengan GitHub.
Anda harus memilih salah satu jalur yang disediakan, dan menjalankan cmd yang di sediakan satu per satu di terminal Anda.

jelankan cmd `npm i sequelize mysql express cors` dimana perintah pada command line interface (CLI) Node Package Manager (npm) yang digunakan untuk menginstal paket-paket Node.js. Ini berarti:

`sequelize`: adalah library ORM (Object-Relational Mapping) untuk Node.js yang memudahkan pembuatan dan manipulasi database dalam aplikasi.
`mysql`: adalah driver database untuk MySQL yang digunakan oleh Sequelize untuk berkomunikasi dengan database MySQL.
`express`: adalah framework web untuk Node.js yang mempermudah pembuatan aplikasi web.
`cors`: adalah library untuk Node.js yang mempermudah mengatur akses Cross-Origin Resource Sharing (CORS) dalam aplikasi web.
Setelah menjalankan perintah `npm i`, paket-paket tersebut akan diunduh dan disimpan sebagai dependensi pada direktori project, dan dapat digunakan dalam aplikasi Anda.

folder node_modules akan terbuat secara otomatis setelah menjalankan perintah `npm i`. Folder ini memiliki ukuran yang besar dan dapat memperlambat proses commit di repository, oleh karena itu Anda perlu membuat file .gitignore dan menuliskan node_modules didalamnya.
Tindakan ini akan mengeliminasi folder node_modules dari proses commit di repository.

