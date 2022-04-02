<?php
$text = $_GET['identifier'];
If (ctype_alnum($text) and !is_numeric($text[0])) 
{
  echo 'yes';
} 
else 
{  
  echo 'no. Параметр "identifier" должен начинаться с буквы и не иметь иных символов кроме букв и цифр.';
}