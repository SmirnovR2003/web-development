<?php

function getParameter(string $name): ?string
{
   	$inputJSON = file_get_contents('php://input');
   	$input = json_decode($inputJSON, true);
   	return $input[$name] ?? null;
}

$firstName = getParameter('firstName');
$email = getParameter('email');
$activity = getParameter('activity');
$agreement = getParameter('agreement');


$file = "../data/" . $email . ".txt";
try {
	if (file_exists($file))
	{
		$tempArray = file($file);

		$tempArray[0] = "First Name: $firstName\n";
		$tempArray[2] = "Activity: $activity";

		file_put_contents($file, $tempArray);
	} 
	else
	{
		$userTxt = @fopen($file, "w");

		if ($userTxt) 
		{
			throw new Exception();
		}
	
		fwrite($userTxt, "First Name: $firstName\n");
		fwrite($userTxt, "Email: $email\n");
		fwrite($userTxt, "Activity: $activity\n");
		fwrite($userTxt, "Agreement: $agreement");
		fclose($userTxt);
		
	}
	
	echo json_encode(['status' => 200]);
}
catch (Exception $e)
{
	echo json_encode(['message' => 'файл не открылся', "status" => 500]);
}


