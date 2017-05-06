<!--Written by Saad-->
<?php
require_once("connection.php");
class sql
{

    static public function get_user($email)
    {
        global $connection;

        $query = "SELECT * ";
        $query .= "FROM users ";
        $query .= "WHERE email = '{$email}' ";
        $query .= "LIMIT 1";
        $result_set = mysqli_query($connection,$query);

        if (!$result_set) {
            die("Database query failed: " . mysqli_error($connection));
        }

       if( mysqli_num_rows($result_set) == 0)
           return 0;

       return $result_set;

    }
    static function signup($email, $password, $name)
    {


        global $connection;
        $query = "INSERT INTO users (email, name ,password ) 
                VALUES  ('{$email}',{'$name'},'{$password}' )";

        $result = mysqli_query($connection,$query);

        if( mysqli_num_rows($result) == 0)
            return 0;

        return $result;
    }
}