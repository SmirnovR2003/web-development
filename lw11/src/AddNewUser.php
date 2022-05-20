<?php

function getParameter(string $name): ?string
{
   	$inputJSON = file_get_contents('php://input');
   	$input = json_decode($inputJSON, true);
   	return $input[$name] ?? null;
}

// echo json_encode(['message' => 'файл не открылся', "status" => 500]);
// return;

$firstName = getParameter('firstName');
$email = getParameter('email');
$activity = getParameter('activity');

$file = "../data/" . $email . ".txt";

if (file_exists($file))
{
	$tempArray = file($file);

	$tempArray[0] = "First Name: $firstName\n";
	$tempArray[2] = "Activity: $activity";

	file_put_contents($file, $tempArray);
} 
else
{
	$userTxt = fopen($file, "w");
	fwrite($userTxt, "First Name: $firstName\n");
	fwrite($userTxt, "Email: $email\n");
	fwrite($userTxt, "Activity: $activity");
	fclose($userTxt);
}

echo json_encode(['status' => 200]);

