<?php
session_start();

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $company = $_POST["company"];
    $text = $_POST["text"];
    $to = "tepposoininen1@gmail.com";


    $subject = "Viesti henkilöltä $name";
    $message = "Yritys: $company\nNumero: $phone\n\n$text";


    // Validate user input
    if (empty($name) || empty($email) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        header("Location: ../yhteydenotto.html?success=0");
        exit();
    }

    

    // Additional headers to prevent email injection
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Attempt to send the email
    if (mail($to, $subject, $message, $headers)) {
        header("Location: ../yhteydenotto.html?success=1");
        exit();
    } else {
        // Log error and redirect with error message
        $errorMessage = "Error sending email: " . error_get_last()['message'];
        error_log($errorMessage, 0);
        header("Location: ../yhteydenotto.html?success=0");
        exit();
    }
} else {
    // Redirect back to the contact page with an error message
    header("Location: ../yhteydenotto.html?success=0");
    exit();
}
?>
