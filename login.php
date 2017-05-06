<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>G-bus</title>
    <link href='semantic/semantic.min.css' rel='stylesheet' />
    <link href="css/login.css" rel="stylesheet"/>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.4/vue.min.js"></script>

</head>
<body>
<div class="ui grid">
    <div class="row"></div>
    <div class="three wide column"></div>
    <div class="ten wide column" id="loginpage">
        <div class="ui top attached tabular menu">
            <a class="item active" data-tab="tab_in" v-on:click="tab1">signin</a>
            <a class="item" data-tab="tab_up" v-on:click="tab2">New Account</a>
        </div>
        <div class="ui tab bottom attached active segment" data-tab="tab_in">
            <form class="ui form" >
                <div class="ui label red" v-show="!validemail">
                    invalid email Format
                </div>
                <div class="inline fields ">
                    <label>Email</label>
                    <input type="email" name="email" v-model="email">
                </div>

                <div class="ui label red" v-show="!haspass">
                    Password field is empty
                </div>
                <div class="inline fields">
                    <label>Password</label>
                    <input type="password" name="pass" v-model="pass">
                </div>

                <div class="row">
                    <div class="ui label">
                        {{$data.success}}
                    </div>
                </div>


                <input type="button" class='ui button' name="name" value="Sign In" v-on:click="signin">
            </form>
        </div>

        <div class="ui tab bottom attached segment" data-tab="tab_up">
            <form class="ui form">
                <div class="ui label" v-show="!validemail">
                    invalid email Format
                </div>

                <div class="inline fields ">
                    <label>Email</label>
                    <input type="text" name="email_up" v-model="email">
                </div>

                <div class="ui label" v-show="!validname">
                    Add a name
                </div>
                <div class="inline fields ">
                    <label>Name</label>
                    <input type="text" name="fullname" v-model="name">
                </div>

                <div class="ui label" v-show="!haspass">
                    password field is empty
                </div>
                <div class="ui label" v-show="!matchingpass">
                    passwords do not match
                </div>
                <div class="inline fields">
                    <label>Password</label>
                    <input type="password" name="pass1" v-model="pass">
                </div>

                <div class="inline fields">
                    <label>Confirm Password</label>
                    <input type="password" name="pass2" v-model="pass2">
                </div>

                <input type="click" class='ui button' name="name" value="Sign Up" v-on:click="signup">
            </form>
        </div>
    </div>

</div>

<script src="semantic/semantic.min.js"></script>
<script src="js/login.js"></script>

</body>


</html>