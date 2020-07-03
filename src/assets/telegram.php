  <?php

/* https://api.telegram.org/bot936006459:AAEZFCmCpxCaGMq5Z_Wc9gAzaMJ1cOtFRLY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//936006459:AAEZFCmCpxCaGMq5Z_Wc9gAzaMJ1cOtFRLY

//$name = $_POST['user_name'];
$phone = $_POST['phone'];
$name = $_POST['user_name'];
$usermessage = $_POST['user_message'];
$token = "936006459:AAEZFCmCpxCaGMq5Z_Wc9gAzaMJ1cOtFRLY";
$chat_id = "-1001436982418";
$arr = array(
//  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Имя' => $name,
  'Сообщение: ' => $usermessage
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//if ($sendToTelegram) {
//  header('Location: thank-you.html');
//} else {
//  echo "Error";
//}