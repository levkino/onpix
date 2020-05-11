<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$post = file_get_contents('php://input');
sendMail(json_decode($post, true));

function sendMail($data) {
  if (empty($data) || empty($data['recipient']) || empty($data['title']) || empty($data['message'])) {
    echo 'Проверьте правильность переданных параметров.';
    return;
  }
  $from = 'info@onpix.ru';
  $to = $data['recipient'];
  $title = $data['title'];
  $message = $data['message'];
  $headers = "FROM: Onpix <$from>";
  var_dump(mail($to, $title, $message, $headers));
}
?>
