<?php
$password = $_GET['password'];
$strength = 0;
$digits = 0;
$uppercase = 0;
$lowercase = 0;
$countOfChar = array();
$repetitionofthesymbol = 0;
$repetition = 0;
if (ctype_alnum($password)) 
{
    $chars = str_split($password);
    foreach ($chars as $char) 
    {
        if (is_numeric($char)) 
        {
            $digits += 1;
        } 
        else if (ctype_upper($char)) 
        {
            $uppercase += 1;
        } 
        else if (ctype_lower($char)) 
        {
            $lowercase += 1;
        }
        if (array_key_exists($char, $countOfChar)) 
        {
            $countOfChar[$char] += 1;
        } 
        else 
        {
            $countOfChar[$char] = 1;
        }
    }
    $strength += strlen($password) * 4;
    $strength += $digits * 4;
    if ($uppercase != 0) 
    {
        $strength += (strlen($password) - $uppercase) * 2;
    }
    if ($lowercase != 0) 
    {
        $strength += (strlen($password) - $lowercase) * 2;
    }
    if (ctype_alpha($password)) 
    {
        $strength -= strlen($password);
    }
    if (is_numeric($password)) 
    {
        $strength -= strlen($password);
    }
    foreach ($countOfChar as $count) 
    {
        if ($count > 1) 
        {
            $strength -= $count;
        }
    }
    echo 'Надежность вашего пароля: ', $strength;
} 
else 
{
    echo 'Пароль должен состоять из цифр и букв';
}