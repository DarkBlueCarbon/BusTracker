
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>G-bus</title>

    <script src='https://api.mapbox.com/mapbox-gl-js/v0.35.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v0.35.1/mapbox-gl.css' rel='stylesheet' />
    <link href='semantic/semantic.min.css' rel='stylesheet' />
    <link href='css/bus.css' rel='stylesheet' />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.8.0.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.15/vue.min.js"></script>


</head>

<body>
<div id="" class="ui grid">

    <div id = "top" class="row">
<!--        <pre>{{$data  | json}}</pre>-->
        <div class="two wide column"><img src="img/logo.png"/></div>
        <div class="eleven wide column"></div>
        <div id="link" class="two wide column">
            <a href="login.php">
                <button class="fluid blue ui button">login/signup
                </button>
                <br>
                <?php
                    if (isset ($_SESSION['name'])) {
                        $username = $_SESSION['name'];
                        echo $username;
                    }

                ?>
            </a>
        </div>
    </div>

    <div class="row">

        <div id='map' class="eleven wide column"></div>
        <div id = "info" class="five wide column">

            <div id = "routes">


                <div id = "route41" class="ui slider checkbox" v-on:click="set_route41">
                    <input type="checkbox" name="example"/>

                    <label >
                        <div class="ui circular empty yellow label"></div>
                        Route 41 - Yellow
                    </label>
                </div>

                <br>

                <div id = "route42" class="ui slider checkbox" v-on:click = "set_route42">
                    <input type="checkbox" name="example" >
                    <label>
                        <div class="ui circular empty blue label"></div>
                            Route 42 - Blue
                    </label>
                </div>

                <br>

                <div id = "route43" class="ui slider checkbox" v-on:click = "set_route43">
                    <img src=""/>
                    <input type="checkbox" name="example"/>

                    <label>
                        <div class="ui circular empty red label"></div>
                        Route 43 - Red

                    </label>
                </div>
            </div>

            <div id = "bus_info"></div>
            <div></div>
        </div>

    </div>
</div>

</body>
<script src="js/bus.js"></script>
</html>
