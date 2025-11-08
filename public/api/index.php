<?php
// Header für CORS & JSON
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Nur POST erlauben
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["error" => "Nur POST erlaubt"]);
  exit;
}

// Eingehende JSON-Daten dekodieren
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
  http_response_code(400);
  echo json_encode(["error" => "Ungültige JSON-Daten"]);
  exit;
}

// Pflichtfelder prüfen
$required = ["name", "phone"];
foreach ($required as $field) {
  if (empty($input[$field])) {
    http_response_code(400);
    echo json_encode(["error" => "Pflichtfeld '$field' fehlt"]);
    exit;
  }
}

// Felder bereinigen
$name          = htmlspecialchars(trim($input["name"]));
$phone         = htmlspecialchars(trim($input["phone"]));
$hasBusiness   = htmlspecialchars(trim($input["hasBusiness"] ?? ""));
$leads         = htmlspecialchars(trim($input["leads"] ?? ""));
$problem       = htmlspecialchars(trim($input["problem"] ?? ""));
$understood    = htmlspecialchars(trim($input["understood"] ?? ""));
$contactMethod = htmlspecialchars(trim($input["contactMethod"] ?? ""));

// Empfänger & Betreff
$to = "info@hc-academy.de"; // ❗ Hier deine Ziel-Mailadresse eintragen
$subject = "Neue Lead-Anfrage von $name";

// Nachricht zusammenbauen (HTML)
$message = "
<h2>Neue Lead-Anfrage</h2>
<p><strong>Name:</strong> $name<br>
<strong>Telefon:</strong> $phone<br>
<strong>Kontaktmethode:</strong> $contactMethod</p>

<h3>Antworten:</h3>
<ul>
  <li><strong>Coachingbusiness:</strong> $hasBusiness</li>
  <li><strong>Leads pro Woche:</strong> $leads</li>
  <li><strong>Problem:</strong> $problem</li>
  <li><strong>Verstanden:</strong> $understood</li>
</ul>
<hr>
<p>Gesendet am " . date("d.m.Y H:i") . "</p>
";

// Header für HTML-Mail
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: HC Academy Leads <noreply@hc-academy.de>\r\n";

// E-Mail senden
if (mail($to, $subject, $message, $headers)) {
  http_response_code(200);
  echo json_encode(["success" => true, "message" => "Lead gesendet"]);
} else {
  http_response_code(500);
  echo json_encode(["error" => "Fehler beim E-Mail-Versand"]);
}
?>
