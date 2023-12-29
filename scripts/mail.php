<?php
session_start();

error_reporting(E_ALL);
ini_set('display_errors', 1);

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user input
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $phone = sanitize_input($_POST["phone"]);
    $company = sanitize_input($_POST["company"]);
    $text = sanitize_input($_POST["text"]);
    $to = "teppos1234@gmail.com";

    // Validate user input
    if (empty($name) || empty($email) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../yhteydenotto.html?success=0");
        exit();
    }

    // Define subject and message
    $subject = "Viesti henkilöltä $name";
    $message = "Yritys: $company\nNumero: $phone\n\n$text";

    // Additional headers to prevent email injection
    $headers = "From: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n";
    $headers .= "Reply-To: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n";
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
