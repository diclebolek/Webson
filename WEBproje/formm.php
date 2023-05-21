
<?php

// Formdan gelen kullanıcı adı ve şifre değişkenlere atanıyor
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre kontrolü yapılıyor
if ($username == 'G211210055@sakarya.edu.tr' && $password == 'G211') {

    header("Location: index.html");
    exit();
    // Giriş işlemi başarılı ise hoşgeldin mesajı gösteriliyor
    echo "Hoşgeldiniz $username";
} else {
    // Giriş işlemi başarısız ise kullanıcı login sayfasına geri yönlendiriliyor
    header("Location: login.html");
    exit();
}
?>