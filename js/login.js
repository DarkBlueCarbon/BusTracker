// Zack Gilchrist
$(document).ready(function(){
    $(".menu .item").tab();

    var log = new Vue({
        el: '#loginpage',

        data:{
            email: "",
            validemail:true,
            name: "",
            validname: true,
            pass: "",
            pass2: "",
            haspass:true,
            matchingpass:true,
            currenttab: 1,
            success:""
        },

        methods:{
            tab1: function(event){
                if(this.currenttab==2)
                {
                    this.currenttab=1;
                    this.email="";
                    this.pass="";
                }
            },
            tab2: function(event){
                if(this.currenttab==1)
                {
                    this.currenttab=2;
                    this.email="";
                    this.pass="";
                }
            },
            signin: function(){
                var emailFormat =  /\S+@\S+\.\S+/;

                if(!emailFormat.test(this.email))
                    this.validemail=false;
                else this.validemail=true;

                if(this.pass=="")
                    this.haspass=false;
                else
                    this.haspass=true;

                if(!(this.matchingpass && this.validname && this.validemail && this.haspass))
                    return;

                $.ajax({
                    type 		: 'POST',
                    url 		: 'includes/signin.php',
                    data 		:
                        {
                            email: this.email,
                            pass: this.pass
                        },
                    //dataType 	: 'json',
                    encode 		: true,
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(thrownError);
                        alert(ajaxOptions);
                    }
                })
                    .done(function(data) {
                        log.success = data.res;
                        if (!data.res) {
                            window.location.replace("index.php");
                            return;
                        }
                        alert(data.res);
                    })
                    .fail(function(data){ });
            },

            signup: function(){
                var emailFormat =  /\S+@\S+\.\S+/;
                var nameFormat = /[A-Za-z'-\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/g;

                if(!emailFormat.test(this.email))
                    this.validemail=false;
                else this.validemail=true;

                if(!nameFormat.test(this.name))
                    this.validname=false;
                else this.validname=true;

                if(this.pass=="")
                    this.haspass=false;
                else
                    this.haspass=true;

                if(this.pass!=this.pass2)
                    this.matchingpass=false;
                else this.matchingpass=true;

                if(!(this.matchingpass&&this.validname&&this.validemail&&this.haspass))
                    return;

                $.post("includes/signup.php",{
                    fullname: this.name,
                    email_up: this.email,
                    pass1: this.pass
                },function(){
                    window.location.replace("index.php");
                });
            }

        }

    });

});
