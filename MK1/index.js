document.getElementById('calculate-btn').addEventListener('click', function () {
  let prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(function (price) {
    total += parseFloat(price.textContent);
  });

  document.getElementById('total-price').textContent = 'Загальна сума: ' + total + ' грн';
});