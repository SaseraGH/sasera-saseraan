// Kalkulator Hobi
document.getElementById('hobby-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const time = document.getElementById('time').value;
  const energy = document.getElementById('energy').value;
  let hobby;

  if (time >= 5 && energy === 'high') {
    hobby = 'Fotografi';
  } else if (time < 5 && energy === 'medium') {
    hobby = 'Berkebun';
  } else {
    hobby = 'Membaca';
  }

  document.getElementById('result').innerHTML = `Hobi yang cocok untuk Anda adalah: ${hobby}`;
});

// Validasi Formulir Kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
});
