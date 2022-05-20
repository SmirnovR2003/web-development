<?php

function getFileSubstring(?string $fileString): ?string
{
   return (trim(substr($fileString, strpos($fileString, ':') + 1)));
}

$files = scandir('../data');
$out = [];

foreach($files as $file)
{
   if (($file === '.') or ($file === '..')) 
   {
      continue;
   }
   $array = file("../data/$file");
   $firstName = getFileSubstring($array[0]);
   $email = getFileSubstring($array[1]);
   $activity = getFileSubstring($array[2]);
   $agreement = getFileSubstring($array[3]);

   $data = [
      "firstName" => $firstName,
      "email" => $email,
      "activity" => $activity,
      "agreement" => $agreement
   ];
   array_push($out, $data);
}

echo json_encode($out);