# Panduan Integrasi Google Sheets (Newsletter)

Karena fitur Marketing SendGrid di akun Anda sudah *expired*, kita akan menyimpan email *subscriber* secara gratis ke Google Sheets.

Silakan ikuti langkah-langkah di bawah ini (hanya butuh waktu 2 menit):

### Langkah-langkah:
1. Buka [Google Sheets](https://docs.google.com/spreadsheets) di browser Anda dan buat *spreadsheet* kosong baru. Beri judul bebas, misalnya: **"Spa Bali Moon Subscribers"**.
2. Di baris pertama (kotak A1), ketik: **Email**. Di sebelahnya (kotak B1), ketik: **Date**.
3. Di menu bagian atas, klik **Extensions (Ekstensi)** lalu pilih **Apps Script**. Tab baru akan terbuka.
4. Hapus semua kode bawaan yang ada di layar, lalu **copy-paste kode di bawah ini**:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var email = e.parameter.email;
  var date = new Date();
  sheet.appendRow([email, date]);
  return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
}
```

5. Klik ikon **Disket / Save** di bagian atas untuk menyimpan kode.
6. Di pojok kanan atas, klik tombol biru **Deploy** lalu pilih **New deployment**.
7. Di jendela yang muncul, klik ikon roda gigi (gear) di sebelah teks "Select type", lalu centang **Web app**.
8. Isi kolom *Description* secara bebas (misal: "API V1").
9. Di menu *Execute as*, biarkan tetap "Me".
10. Di menu **Who has access**, ubah menjadi **"Anyone"** (Siapa saja). Ini wajib agar website bisa mengirim data ke sini.
11. Klik tombol **Deploy**. 
    - *(Catatan: Google mungkin akan meminta Anda untuk "Authorize access", silakan ikuti petunjuknya, pilih akun email Anda, klik Advanced/Lanjutan, dan pilih "Go to Untitled project (unsafe)" lalu klik Allow/Izinkan).*
12. Selesai! Anda akan mendapatkan **Web app URL** yang panjang (berakhiran dengan `/exec`).

### Tugas Anda Selanjutnya:
Tolong **copy URL Web app tersebut** (yang Anda dapat di langkah 12) lalu kirimkan (paste) ke ruang chat (IDE) ini. 

Setelah Anda mengirimkan URL tersebut, saya akan otomatis memasangnya di *backend* website Anda!
