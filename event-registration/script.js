document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const event = document.getElementById('event').value;
  const agree = document.getElementById('agree').checked;

  if (!name || !email || !event || !agree) {
    alert('Harap isi semua field dan setujui syarat!');
    return;
  }

  if (!validateEmail(email)) {
    alert('Format email tidak valid.');
    return;
  }

  const confirmationBox = document.getElementById('confirmation');
  confirmationBox.innerHTML = `
    <h3>Pendaftaran Berhasil!</h3>
    <p>Nama: <strong>${name}</strong></p>
    <p>Email: <strong>${email}</strong></p>
    <p>Event: <strong>${event}</strong></p>
  `;
  confirmationBox.classList.remove('hidden');
  document.getElementById('eventForm').reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}