<html>
<body style="background:#FFF;">
<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$mensaje = "Este mensaje fue enviado por " . $nombre . " " . $apellido . " \r\n";
$mensaje .= "Su teléfono es: " . $telefono . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'nakhlauruguay@gmail.com';
$asunto = 'Nakhla | Consulta Web';

mail($para, $asunto, utf8_decode($mensaje), $header);
header('Location: ../index.html');
?>
</body>
</html>