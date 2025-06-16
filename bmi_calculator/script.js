document.getElementById('bmi-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Ambil nilai berat dan tinggi badan
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Ubah ke meter

  // Validasi input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Mohon masukkan data yang valid!");
    return;
  }

  // Hitung BMI
  const bmi = weight / (height * height);
  const bmiValue = bmi.toFixed(2);

  // Tentukan kategori BMI
  let bmiCategory = "";
  if (bmi < 18.5) {
    bmiCategory = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal (sehat)";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Kelebihan berat badan";
  } else {
    bmiCategory = "Obesitas";
  }

  // Tampilkan hasil
  document.getElementById('bmi-value').textContent = `BMI: ${bmiValue}`;
  document.getElementById('bmi-category').textContent = bmiCategory;
});