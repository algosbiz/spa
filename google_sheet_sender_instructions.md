# Panduan Membuat Pengirim Promo di Google Sheets

Pilihan yang sangat tepat! Opsi ini 100% gratis dan tidak membebani server website Anda.

Silakan ikuti panduan singkat ini untuk menambahkan tombol "Kirim Promo" ke Google Sheets Anda.

### Langkah-langkah:
1. Buka kembali Google Sheets Anda ("Spa Bali Moon Subscribers").
2. Klik menu **Extensions (Ekstensi)** -> **Apps Script**.
3. Di layar *editor* (di bawah baris kode `doPost` yang kemarin sudah kita buat), hapus kode marketing yang lama (jika sudah di-*paste*) lalu **paste (tempel) kode terbaru di bawah ini**:

```javascript
// ====== KODE KIRIM PROMO MARKETING ====== //

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('✨ Marketing Spa')
      .addItem('Kirim Promo ke Semua Subscriber', 'showPromoDialog')
      .addToUi();
}

function showPromoDialog() {
  var html = HtmlService.createHtmlOutput(
    '<div style="font-family: sans-serif; padding: 10px;">' +
    
    '<p style="margin: 0 0 5px; font-size: 14px;"><b>Judul Email (Subject):</b></p>' +
    '<input type="text" id="subject" style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Promo Diskon 50% Bali Massage...">' +
    
    '<p style="margin: 0 0 5px; font-size: 14px;"><b>URL Gambar / Banner Promo (Opsional):</b></p>' +
    '<input type="text" id="imageUrl" style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;" placeholder="https://spabalimoon.com/images/promo1.jpg">' +
    
    '<p style="margin: 0 0 5px; font-size: 14px;"><b>Isi Pesan:</b></p>' +
    '<textarea id="message" style="width: 100%; height: 120px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 15px;" placeholder="Halo, kami sedang ada promo khusus untuk Anda..."></textarea>' +
    
    '<p style="margin: 0 0 5px; font-size: 14px;"><b>Teks Tombol (Opsional):</b></p>' +
    '<input type="text" id="btnText" style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Book Now">' +
    
    '<p style="margin: 0 0 5px; font-size: 14px;"><b>URL Link Tombol (Opsional):</b></p>' +
    '<input type="text" id="btnLink" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="https://spabalimoon.com">' +
    
    '<button onclick="sendData()" style="margin-top: 25px; background: #b8952e; color: white; border: none; padding: 12px 20px; cursor: pointer; border-radius: 4px; font-weight: bold; width: 100%; font-size: 16px;">KIRIM EMAIL SEKARANG</button>' +
    '</div>' +
    '<script>' +
    'function sendData() {' +
    '  var btn = document.querySelector("button"); btn.innerText = "Mengirim..."; btn.disabled = true; btn.style.opacity = 0.7;' +
    '  var subject = document.getElementById("subject").value;' +
    '  var imageUrl = document.getElementById("imageUrl").value;' +
    '  var message = document.getElementById("message").value;' +
    '  var btnText = document.getElementById("btnText").value;' +
    '  var btnLink = document.getElementById("btnLink").value;' +
    '  google.script.run.withSuccessHandler(function() { google.script.host.close(); }).processSendEmail(subject, imageUrl, message, btnText, btnLink);' +
    '}' +
    '</script>'
  )
  .setWidth(500)
  .setHeight(650);
  
  SpreadsheetApp.getUi().showModalDialog(html, 'Buat Email Marketing');
}

function processSendEmail(subject, imageUrl, rawMessage, btnText, btnLink) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  
  var apiKey = 'YOUR_SENDGRID_API_KEY';
  var fromEmail = 'no-reply@spabalimoon.com';
  var businessName = 'Spa Bali Moon';
  
  // Format the raw message (replace enters with <br> tags)
  var formattedMessage = rawMessage.replace(/\n/g, "<br>");
  
  // Build dynamic parts
  var imageHtml = imageUrl ? '<img src="' + imageUrl + '" alt="Promo" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 25px; display: block; margin-left: auto; margin-right: auto;" />' : '';
  
  var buttonHtml = '';
  if (btnText && btnLink) {
    buttonHtml = '<div style="text-align: center; margin-top: 35px;"><a href="' + btnLink + '" style="display: inline-block; background-color: #b8952e; color: #ffffff; padding: 14px 36px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 15px; letter-spacing: 0.5px;">' + btnText + '</a></div>';
  }

  // Inject into the beautiful HTML Template
  var htmlTemplate = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f0ebe1;">
          <div style="background-color: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 3px solid #b8952e;">
              <img src="https://spabalimoon.com/images/logo/sbm.webp" alt="${businessName}" style="max-height: 80px; width: auto; margin-bottom: 15px;" />
              <p style="color: #b8952e; margin: 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">Relax &bull; Rejuvenate &bull; Restore</p>
          </div>
          <div style="padding: 35px 30px;">
              <div style="background-color: #ffffff; border-radius: 12px; padding: 35px 30px; border: 1px solid #e5ddd0;">
                  ${imageHtml}
                  <p style="color: #3d3428; line-height: 1.8; margin: 0; font-size: 15px;">
                      ${formattedMessage}
                  </p>
                  ${buttonHtml}
              </div>
          </div>
          <div style="padding: 30px; text-align: center; border-top: 1px solid #e5ddd0;">
              <h3 style="color: #3d3428; margin: 0 0 12px; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Contact Info</h3>
              <p style="margin: 0 0 5px; color: #6b5e4e; font-size: 13px;">Jl. Panggung Sari No. 30, Seminyak, Bali</p>
              <p style="margin: 0 0 5px; color: #6b5e4e; font-size: 13px;">+62 878-6317-5144</p>
              <p style="margin: 0 0 20px; font-size: 13px;"><a href="mailto:info@spabalimoon.com" style="color: #b8952e; text-decoration: none;">info@spabalimoon.com</a></p>
              
              <div style="margin-bottom: 20px;">
                  <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold;">X</a>
                  <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold; font-family: serif;">f</a>
                  <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold;">in</a>
                  <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold;">ig</a>
              </div>
          </div>
      </div>
  `;
  
  // Ambil semua email di Kolom A (mulai baris kedua)
  var data = sheet.getRange("A2:A" + sheet.getLastRow()).getValues();
  var emails = [];
  
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] && data[i][0].indexOf('@') > -1) {
      emails.push(data[i][0]);
    }
  }
  
  if (emails.length === 0) {
    ui.alert("Gagal", "Tidak ada alamat email yang ditemukan di Kolom A.", ui.ButtonSet.OK);
    return;
  }
  
  // Buat batch penerima
  var personalizations = emails.map(function(email) {
    return { "to": [{ "email": email }] };
  });

  var payload = {
    "personalizations": personalizations,
    "from": {
      "email": fromEmail,
      "name": businessName
    },
    "subject": subject,
    "content": [
      {
        "type": "text/html",
        "value": htmlTemplate
      }
    ]
  };

  var options = {
    "method": "post",
    "headers": {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    var response = UrlFetchApp.fetch("https://api.sendgrid.com/v3/mail/send", options);
    if(response.getResponseCode() == 202) {
      ui.alert("Berhasil!", "Email marketing sukses dikirim ke " + emails.length + " pelanggan.", ui.ButtonSet.OK);
    } else {
      ui.alert("Error SendGrid", response.getContentText(), ui.ButtonSet.OK);
    }
  } catch(e) {
    ui.alert("Error System", e.message, ui.ButtonSet.OK);
  }
}
```

4. Klik **Simpan (ikon Disket)** di bagian atas.
5. **Penting:** Setelah menyimpan kode, *refresh* (muat ulang) halaman Google Sheets Anda. 
6. Tunggu beberapa detik, di menu bagian atas (di samping menu Help/Bantuan) akan muncul menu baru bernama **"✨ Marketing Spa"**.

### Fitur Baru Form Marketing Ini:
Kini saat Anda mengklik menu **"Kirim Promo"**, Anda akan mendapatkan form lengkap:
- **Judul Email** (Subject)
- **Gambar Banner Promo**: Anda tinggal mem-*paste* link gambar dari website Anda (atau link gambar apapun). Gambar akan otomatis muncul besar di tengah email.
- **Isi Pesan**: Tulis pesan seperti biasa. Baris baru (Enter) akan terbaca otomatis.
- **Teks Tombol & Link**: Jika Anda mengisi ini (misal teks: "Pesan Sekarang" dan link: `https://spabalimoon.com`), maka tombol CTA (*Call To Action*) warna emas yang cantik akan otomatis dibuat di bawah pesan.

Hasil email yang terkirim dijamin 100% menggunakan desain yang persis sama dengan email otomatis (Contact Form) Anda: *background beige*, kotak putih elegan, lengkap dengan logo Spa Bali Moon di atas dan info kontak di bawah!
