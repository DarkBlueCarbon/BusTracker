<?php
require_once("connection.php");

include_once("sql.php");

include_once("user.php");


$email="";
//echo "started form processing";

$errors = array();

$email = ($_POST['email']);
$password = ($_POST['pass']);

$hashed_password = sha1($password);

// perform validations on the form data

$result_set = sql::get_user($email);
// username/password authenticated and only 1 match
if( mysqli_num_rows($result_set) == 0)
{
    $s=array("res"=>"user not found or incorrect password");
    echo json_encode($s);
    return;
}
$found_user = mysqli_fetch_array($result_set);
$s = array("res"=>"");
echo json_encode($s);
session_start();
$_SESSION['id'] = $found_user['id'];
$_SESSION['email'] = $found_user['email'];
$_SESSION['name'] = $found_user['name'];

//redirect_to("../dashboard.php");

?>
