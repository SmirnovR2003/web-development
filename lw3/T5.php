<?php
if ($_GET['email'] <> '') 
{
    $file_name = $_GET['email'] . '.txt';
    if (file_exists($file_name)) 
    {
        $file_strings = file($file_name);
        foreach ($file_strings as $file_string) 
        {
            echo $file_string . "<br />";
        }
    } 
    else 
    {
        echo ("Ошибка, не найден файл с почтой " . $_GET['email']);
    }
} 
else 
{
    echo 'Ошибка, параметр "email" не должен быть пустым';
}