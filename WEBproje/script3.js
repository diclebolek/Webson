document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var resetButton = document.getElementById('resetButton');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var firstNameInput = document.getElementById('firstName');
    var lastNameInput = document.getElementById('lastName');
    var phoneInput = document.getElementById('phone');
    var genderSelect = document.getElementById('gender');
    var messageTextarea = document.getElementById('message');
    var emailInput = document.getElementById('email');
    var citySelect = document.getElementById('city');

    if (!validateName(firstNameInput.value)) {
      alert('Lütfen geçerli bir ad girin.');
      return;
    }

    if (!validateName(lastNameInput.value)) {
      alert('Lütfen geçerli bir soyad girin.');
      return;
    }

    if (!validatePhone(phoneInput.value)) {
      alert('Lütfen geçerli bir telefon numarası girin. (10 haneli, sadece rakamlardan oluşmalı)');
      return;
    }

    if (genderSelect.value === '') {
      alert('Lütfen cinsiyet seçiniz.');
      return;
    }

    if (!validateMessage(messageTextarea.value)) {
      alert('Lütfen bir mesaj girin.');
      return;
    }

    if (!validateEmail(emailInput.value)) {
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    if (citySelect.value === '') {
      alert('Lütfen bir şehir seçiniz.');
      return;
    }

    // Formun gönderilmesi
    console.log('Form submitted');
    form.reset();
  });

  resetButton.addEventListener('click', function () {
    form.reset();
  });

  function validateName(name) {
    var regex = /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/;
    return regex.test(name);
  }

  function validatePhone(phone) {
    var regex = /^\d{10}$/;
    return regex.test(phone);
  }

  function validateMessage(message) {
    return message.trim() !== '';
  }

  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});