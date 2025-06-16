document.querySelectorAll('.remove-item').forEach(button => {
  button.addEventListener('click', function() {
    this.parentElement.remove();
    updateTotal();
  });
});

document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Pembayaran berhasil diproses!");
});

function updateTotal() {
  const items = document.querySelectorAll('.cart-item');
  let total = 0;
  items.forEach(item => {
    const price = parseInt(item.querySelector('p').innerText.replace('Rp ', '').replace(/\./g, ''));
    total += price;
  });
  document.querySelector('.total p').innerText = 'Total: Rp ' + total.toLocaleString();
}
