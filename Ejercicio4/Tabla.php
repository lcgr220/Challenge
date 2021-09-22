<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$name = $_POST["visitor_name"];
$email = $_POST["visitor_email"];
$phone = $_POST["visitor_phone"];
$message = $_POST["visitor_message"];

$sql = "INSERT INTO contact (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
  echo '{"status": "OK"}';
} else {
  echo '{"status": "NOK"}';
}

$conn->close();
?>