Deskripsi Tugas
Pada tugas ini, saya diminta untuk melakukan perubahan pada aplikasi penitipan hewan yang sebelumnya terhubung ke mock API. Perubahan utama yang dilakukan adalah mengganti koneksi API tersebut menjadi koneksi langsung ke database, sehingga aplikasi bisa mengelola data dengan cara yang lebih dinamis dan efisien. Proses ini melibatkan implementasi fungsi CRUD (Create, Read, Update, Delete) dengan memanfaatkan database untuk penyimpanan data.

Fitur yang Diperbarui
Create (Tambah Hewan) - Menambahkan hewan baru ke dalam database.
Read (Baca Hewan) - Mengambil data hewan yang ada dalam database.
Update (Perbarui Hewan) - Memperbarui data hewan yang sudah ada dalam database.
Delete (Hapus Hewan) - Menghapus data hewan dari database.
Teknologi yang Digunakan
React Native - Untuk pengembangan aplikasi mobile.
TypeScript - Sebagai bahasa pemrograman yang digunakan.
SQLite - Sebagai database lokal untuk menyimpan data hewan.
Axios - Untuk menghubungkan aplikasi dengan API/database.
Langkah-Langkah Pengubahan
Membuat Fungsi CRUD dengan SQLite
Fungsi yang sebelumnya mengakses mock API telah diubah menjadi operasi langsung terhadap database SQLite. Saya menggunakan SQLite untuk menyimpan dan mengambil data hewan, yang memungkinkan aplikasi bekerja lebih efisien tanpa bergantung pada API eksternal.

Mengubah Struktur API
Struktur API yang semula mengakses mock API diubah menjadi struktur database, dengan memanfaatkan fungsi seperti getAnimalsFromDB, addAnimalToDB, updateAnimalInDB, dan deleteAnimalFromDB. Fungsi-fungsi ini digunakan untuk melakukan query terhadap database SQLite.

Penggunaan Tipe TypeScript untuk Data Hewan
Menggunakan interface Cat yang telah didefinisikan sebelumnya untuk memastikan bahwa data yang diterima dan dikirim ke database mengikuti struktur yang konsisten.

Pengujian Fungsi CRUD
Setelah perubahan dilakukan, aplikasi diuji dengan menambahkan, mengedit, dan menghapus data hewan untuk memastikan bahwa setiap fungsi CRUD berjalan dengan baik.
