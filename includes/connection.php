<?php

// Database Constants

  if(file_exists("../local/temp.txt")||file_exists("local/temp.txt"))
  {
      define("DB_SERVER", "localhost");
      define("DB_USER", "root");
      define("DB_PASS", "");
      define("DB_NAME", "app");
  }
  else {
      define("DB_SERVER", getenv(OPENSHIFT_MYSQL_DB_HOST));
      define("DB_USER", getenv(OPENSHIFT_MYSQL_DB_USERNAME));
      define("DB_PASS", getenv(OPENSHIFT_MYSQL_DB_PASSWORD));
      define("DB_NAME", "app");
  }

    $connection = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    if (!$connection)
    {
        die("Database connection failed: " . (string)mysqli_error($connection) );
    }