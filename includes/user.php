<?php

require_once("connection.php");
class user
{
    private $user_id = 0;
    private $name = "";
    private $email = "";
    private $pass = "";

    /**
     * @return int
     */
    public function get_id()
    {

        return $this->user_id;
    }

    /**
     * @param $pass_in
     * @return int
     */
    public function verify_pass($pass_in)
    {
        if ($pass_in == $this->pass)
        {
            return 1;
        }
        else return 0;
    }

    /**
     * @return int
     */
    public static function confirm_logged_in()
    {
        if (isset($_SESSION['user_id']))
            return 1;

        return 0;
    }


}
