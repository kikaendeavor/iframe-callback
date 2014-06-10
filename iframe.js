    /*回调关闭iframe*/
    $(".close").click(function(){
        parent.iframecbAsync({
            result:"01"
        });
    });
    
    /*回调，返回激活码*/
    $("#btn-active").click(function(){
        parent.iframecbAsync({
            result:"02",
            LufaCoin_code:"123abc"
        });
    });
