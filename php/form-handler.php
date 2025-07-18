<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $email = $_POST["email"] ?? "";
    

    $correoDestino = "jeisson12aaron@gmail.com";

    $contenidoHTML = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: auto;'>
        <div style='text-align: center; margin-bottom: 20px;'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsrRviVm_-d9Zo9j1Rlrr28Tgo8H7NBz14Q&s' alt='Logo' style='max-width: 100px;'>
            <h2 style='color: #333;'>Nueva solicitud desde la página PosteaLab</h2>
        </div>
        <p><strong>Solicitud de suscripción</strong></p>
        <hr>

        <p><strong>Correo del interesado:</strong></p>
        <ul style='line-height: 1.6;'>
            
            <li><strong>Email:</strong> $email</li>
            
        </ul>

        <hr>
        <p style='font-size: 12px; color: #999;'>Este mensaje fue enviado automáticamente desde el sitio web.</p>
    </div>
    ";


    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jeisson12aaron@gmail.com';
        $mail->Password = 'dgyowiskdxfaukzx'; 
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($mail->Username, 'PosteaLab');
        $mail->addAddress($correoDestino);

        $mail->isHTML(true);
        $mail->Subject = 'Nueva solicitud de suscripción - PosteaLab';
        $mail->Body    = $contenidoHTML;

        $mail->send();
        echo "Mensaje enviado correctamente.";
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
} else {
    echo "Acceso no permitido.";
}
?>