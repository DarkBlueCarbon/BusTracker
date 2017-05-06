<?php
require_once("connection.php");

include_once("sql.php");

include_once("user.php");

$message = "";

$fullname = ($_POST['fullname']);
$email = ( $_POST['email_up']);
$password = ($_POST['pass1']);
$hashed_password = sha1($password);

$time=  date("F j, Y, g:i a");

sql::signup($email,$hashed_password,$fullname);
//Sign the User in
if ($result)
{
    //success

    $result_set = sql::signup($email,$hashed_password);
    // username/password authenticated and only 1 match
    $found_user = mysqli_fetch_array($result_set);

    if (mysqli_num_rows($result_set) == 1)
    {
        // username/password authenticated
        // and only 1 match
        session_start();
        session_destroy();
        session_start();

        $_SESSION['user_id'] = $found_user['id'];
        echo $_SESSION['user_id'];
        $_SESSION['email'] = $found_user['email'];
        echo $_SESSION['email'];
        $_SESSION['username'] = $found_user['name'];
        echo $_SESSION['username'];
        $location = "../dashboard.php";
        if ($location != NULL) {
            header("Location: {$location}");
            exit;
        }
    }
    else
    {
        $message = "The user could not be signed up.";
        $message .= "<br />" . mysqli_error($connection);
    }
}


echo $message;

?>
