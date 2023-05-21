<?php
if (isset($_POST['submit'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    $city = $_POST['city'];

    // Form verilerini ekranda gösterme
    echo "<h2>Gönderilen Form Bilgileri:</h2>";
    echo "<p><strong>Ad:</strong> $firstName</p>";
    echo "<p><strong>Soyad:</strong> $lastName</p>";
    echo "<p><strong>Telefon:</strong> $phone</p>";
    echo "<p><strong>Cinsiyet:</strong> $gender</p>";
    echo "<p><strong>Mesaj:</strong> $message</p>";
    echo "<p><strong>E-posta:</strong> $email</p>";
    echo "<p><strong>Şehir:</strong> $city</p>";
}
