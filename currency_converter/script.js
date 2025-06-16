document.getElementById('currency-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Ambil nilai input
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;

  // Daftar nilai tukar (asumsi nilai tetap untuk contoh)
  const exchangeRates = {
    USD: { IDR: 15000, EUR: 0.92 },
    EUR: { USD: 1.09, IDR: 16300 },
    IDR: { USD: 0.000067, EUR: 0.000061 }
  };

  // Validasi input
  if (isNaN(amount) || amount <= 0) {
    alert("Mohon masukkan jumlah uang yang valid!");
    return;
  }

  // Hitung nilai konversi
  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);

  // Tampilkan hasil konversi
  document.getElementById('converted-amount').textContent = `Hasil Konversi: ${convertedAmount} ${toCurrency}`;
});