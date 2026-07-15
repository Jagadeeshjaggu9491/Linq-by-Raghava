<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

error_reporting(E_ALL);
ini_set("display_errors", 0); // Disable error output to preserve clean JSON responses
$response = ["status" => "error", "message" => "Invalid request"];

require 'libs/PHPMailer/PHPMailer.php';
require 'libs/PHPMailer/SMTP.php';
require 'libs/PHPMailer/Exception.php';

$email_host = 'smtp.hostinger.com';
$email_username = 'contact@linqatkokapet.com';
$email_password = '4TnAY~Ao|'; // SMTP Password
$email_port = 587;

// Database credentials
$servername = "localhost";
$username = "u265939643_linq";
$password = "CMjoK0A/q";
$dbname = "u265939643_linq";

// Enable mysqli exception throwing for structured catch handling
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Autocreate Table if missing
    $createTableSql = "CREATE TABLE IF NOT EXISTS contact_form (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL,
        phone VARCHAR(50),
        message TEXT,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email)
    )";
    $conn->query($createTableSql);
} catch (Throwable $e) {
    echo json_encode(["status" => "error", "message" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Support JSON payload
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if (strpos($contentType, 'application/json') !== false) {
        $input = json_decode(file_get_contents("php://input"), true);
        $_POST = array_merge($_POST, $input ?? []);
    }

    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['mobile'] ?? $_POST['phone'] ?? ''));
    $unitSize = htmlspecialchars(trim($_POST['unitSize'] ?? $_POST['unit_size'] ?? 'Not Specified'));
    $rawMessage = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (empty($name) || empty($email)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields (Name, Email)."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Please enter a valid email address."]);
        exit;
    }

    // Format message for Database storage
    $dbMessage = $rawMessage;
    if (!empty($unitSize) && $unitSize !== 'Not Specified') {
        $dbMessage = "Preferred Unit: " . $unitSize . "\n" . $rawMessage;
    }

    // Save to Database (inside try-catch so database mismatches don't block mail delivery)
    $db_saved = false;
    $db_error = '';
    try {
        $stmt = $conn->prepare("INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("ssss", $name, $email, $phone, $dbMessage);
            $stmt->execute();
            $stmt->close();
            $db_saved = true;
        } else {
            $db_error = $conn->error;
        }
    } catch (Throwable $dbEx) {
        $db_error = $dbEx->getMessage();
    }

    try {
        $submittedAt = date('d M Y, h:i A');

        // 1. Send Notification Email to Admin
        $adminMail = new PHPMailer(true);
        $adminMail->isSMTP();
        $adminMail->Host = $email_host;
        $adminMail->SMTPAuth = true;
        $adminMail->Username = $email_username;
        $adminMail->Password = $email_password;
        $adminMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $adminMail->Port = $email_port;

        $adminMail->setFrom($email_username, 'LINQ BY RAGHAVA');
        $adminMail->addAddress('peracause@gmail.com');
        // $adminMail->addAddress('rakesh.tattvahilife@gmail.com');
        // $adminMail->addAddress('rakeshnia11@gmail.com');
        $adminMail->addReplyTo($email, $name);
        
        $adminMail->Subject = 'New Contact Form Submission - ' . $name;
        $adminMail->isHTML(true);

        $adminMail->Body = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Contact Submission</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: "Plus Jakarta Sans", Arial, sans-serif; background-color: #FCFAF6; color: #231E1B; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; border: 1px solid rgba(142, 114, 92, 0.22); box-shadow: 0 10px 30px rgba(74, 60, 49, 0.05); overflow: hidden; }
    .header { background: #8E725C; color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 3px solid #644E3E; }
    .header h2 { font-family: "Cinzel", Georgia, serif; margin: 0; font-size: 20px; letter-spacing: 0.05em; font-weight: 600; }
    .content { padding: 30px 25px; }
    .content p { margin: 0 0 20px; font-size: 15px; color: #6B5E55; line-height: 1.5; }
    .table-details { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .table-details td { padding: 12px 15px; border-bottom: 1px solid rgba(142, 114, 92, 0.12); font-size: 14.5px; }
    .table-details td.label { font-weight: 700; color: #8E725C; width: 35%; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; }
    .table-details td.value { color: #231E1B; }
    .footer { background: #F4ECE1; padding: 15px; text-align: center; font-size: 12px; color: #94867C; border-top: 1px solid rgba(142, 114, 92, 0.12); }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📩 NEW ENQUIRY RECEIVED</h2>
    </div>
    <div class="content">
      <p>A user has submitted the contact/enquiry form on the <strong>LINQ by Raghava</strong> website. Here are the details:</p>
      <table class="table-details">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">' . $name . '</td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:' . $email . '" style="color:#8E725C; text-decoration:none;">' . $email . '</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:' . $phone . '" style="color:#8E725C; text-decoration:none;">' . $phone . '</a></td>
        </tr>
        <tr>
          <td class="label">Apartment Size</td>
          <td class="value">' . $unitSize . '</td>
        </tr>
        <tr>
          <td class="label">Message</td>
          <td class="value">' . (empty($rawMessage) ? '<em style="color:#94867C;">No message provided</em>' : nl2br($rawMessage)) . '</td>
        </tr>
        <tr>
          <td class="label">Submitted At</td>
          <td class="value">' . $submittedAt . '</td>
        </tr>
      </table>
      ' . (!empty($db_error) ? '<p style="color:#ef4444; font-size: 12px; margin-top:20px;">[DB Log Error: ' . $db_error . ']</p>' : '') . '
    </div>
    <div class="footer">
      This is an automated notification from the LINQ BY RAGHAVA Web Portal.
    </div>
  </div>
</body>
</html>';

        $adminMail->send();

        // 2. Send Auto-Reply Confirmation Email to User
        $userMail = new PHPMailer(true);
        $userMail->isSMTP();
        $userMail->Host = $email_host;
        $userMail->SMTPAuth = true;
        $userMail->Username = $email_username;
        $userMail->Password = $email_password;
        $userMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $userMail->Port = $email_port;

        $userMail->setFrom($email_username, 'LINQ BY RAGHAVA');
        $userMail->addAddress($email, $name);
        $userMail->Subject = 'Thank you for your interest in LINQ by Raghava';
        $userMail->isHTML(true);

        $userMail->Body = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Thank You - LINQ by Raghava</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: "Plus Jakarta Sans", Arial, sans-serif; background-color: #FCFAF6; color: #231E1B; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; border: 1px solid rgba(142, 114, 92, 0.22); box-shadow: 0 10px 30px rgba(74, 60, 49, 0.05); overflow: hidden; }
    .header { background: #8E725C; color: #ffffff; padding: 35px 20px; text-align: center; border-bottom: 3px solid #644E3E; }
    .header h2 { font-family: "Cinzel", Georgia, serif; margin: 0; font-size: 20px; letter-spacing: 0.06em; font-weight: 600; }
    .content { padding: 30px 25px; }
    .content h3 { font-family: "Cinzel", Georgia, serif; margin: 0 0 15px; color: #8E725C; font-size: 16px; font-weight: 600; }
    .content p { margin: 0 0 18px; font-size: 14.5px; color: #6B5E55; line-height: 1.6; }
    .contact-box { margin: 25px 0; padding: 20px; background: #F4ECE1; border-left: 4px solid #8E725C; border-radius: 0 8px 8px 0; }
    .contact-box h4 { margin: 0 0 8px 0; color: #644E3E; font-size: 13.5px; text-transform: uppercase; font-family: "Cinzel", Georgia, serif; }
    .contact-box p { margin: 0; font-size: 14px; color: #231E1B; line-height: 1.5; }
    .contact-box a { color: #8E725C; text-decoration: none; font-weight: bold; }
    .table-details { width: 100%; border-collapse: collapse; margin-top: 20px; border: 1px solid rgba(142, 114, 92, 0.12); border-radius: 8px; overflow: hidden; }
    .table-details td { padding: 12px 15px; border-bottom: 1px solid rgba(142, 114, 92, 0.12); font-size: 13.5px; }
    .table-details td.label { font-weight: 700; color: #8E725C; width: 35%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; background: #F4ECE1; }
    .table-details td.value { color: #231E1B; background: #ffffff; }
    .footer { background: #F4ECE1; padding: 20px; text-align: center; font-size: 11.5px; color: #94867C; border-top: 1px solid rgba(142, 114, 92, 0.12); }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>LINQ BY RAGHAVA</h2>
    </div>
    <div class="content">
      <h3>Thank you for contacting us, ' . $name . '!</h3>
      <p>We have successfully received your enquiry and appreciate your interest in <strong>LINQ by Raghava</strong>—Kokapet\'s finest luxury residential community.</p>
      <p>Our sales relationship manager will review your preferred configuration and contact you shortly with the digital brochure, floor plans, and pricing breakdown.</p>
      
      <div class="contact-box">
        <h4>Direct VIP Desk</h4>
        <p>
          Phone: <a href="tel:+919620832395">+91 96208 32395</a><br>
          Email: <a href="mailto:contact@linqatkokapet.com">contact@linqatkokapet.com</a>
        </p>
      </div>

      <p style="font-weight: 600; color: #8E725C; margin-bottom: 10px;">Submitted Copy of Your Details:</p>
      <table class="table-details">
        <tr>
          <td class="label">Name</td>
          <td class="value">' . $name . '</td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value">' . $phone . '</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value">' . $email . '</td>
        </tr>
        <tr>
          <td class="label">Preferred Unit</td>
          <td class="value">' . $unitSize . '</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      © ' . date("Y") . ' Raghava Projects. Kokapet, Hyderabad. All Rights Reserved.
    </div>
  </div>
</body>
</html>';

        $userMail->send();

        $response = ["status" => "success", "message" => "Your enquiry has been successfully submitted!"];
    } catch (Exception $e) {
        $response = ["status" => "error", "message" => "Mailer Error: " . $e->getMessage()];
    }
}

echo json_encode($response);
$conn->close();
exit;
