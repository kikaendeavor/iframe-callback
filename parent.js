    var activationLC = lufax.com.iframecb;
    $(".active-link").click(function(){
        activationLC.pop();     //调用iframe
    });

    activationLC.onSuccess = function(data){    //onSuccess方法的具体实现
        if(data.LufaCoin_code){
            alert("激活成功");
        }
    }
