<?php

function getPostParameter(string $name): ?string
{
    return isset($_POST[$name]) ? $_POST[$name] : null;
}

$firstName = getPostParameter('first_name');
$email = getPostParameter('email');
$activity = getPostParameter('activity');
$agreement = getPostParameter('agreement');
$isError = false;


if (empty($agreement))
{
	echo "Согласитесь с пользовательским соглашением <br/>";
	$isError = true;
}

if ($activity == "Деятельность")
{
	echo "Выберите профессию <br/>";
	$isError = true;
}

if (empty($firstName))
{
	echo "Введите имя <br/>";
	$isError = true;
}

if (empty($email))
{
	echo "Почта не указана";
	$isError = true;
}

if ($isError)
{
	die;
}

$file = "../data/" . $email . ".txt";

if (file_exists($file))
{
	$tempUserArray = file($file);
	if (!(empty($firstName)))
	{
		$tempUserArray[0] = "First Name: $firstName\n";
	}

	if (!(empty($activity)))
	{
		$tempUserArray[2] = "Activity: $activity";
	}

	file_put_contents($file, $tempUserArray);
} 
else
{
	$userTxt = fopen($file, "w");
	fwrite($userTxt, "First Name: $firstName\n");
	fwrite($userTxt, "Email: $email\n");
	fwrite($userTxt, "Activity: $activity");
	fclose($userTxt);
}

$tempArray = file($file);
for ($i = 0; $i < 3; $i++)
{
	echo "$tempArray[$i] <br />";
}
?>