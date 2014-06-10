!function(){
    function iframecb(){

    }

    iframecb.prototype = {
        template: '<iframe id="iframecbFrame" src="$protocol//xxx.xxx.com/activate-code?callback=iframecb" scrolling="no" frameborder="0" width="526" height="320"></iframe>',

        pop: function(){
            var me = this;
            me.template = me.template.replace("$protocol",location.protocol);

            LufaxPopup.blankPopup({
                content:
                    '<div class="modal-content">' +
                        '<div class="modal-header clearfix">' +
                            '<div class="close"><a class="modal-close" href="javascript:;"></a></div>' +
                            '<h4 class="modal-title">激活xxx</h4>' +
                        '</div>' +
                        me.template +
                    '</div>',
                onConfirm:function () { }
            });
        },

        map: function(){
            var me = this;
            return {
                /*close*/
                "01":function(){
                    LufaxPopup.close();
                },
                /*success*/
                "02":function(data){
                    me.onSuccess && me.onSuccess(data);
                },
                "03":function(){
                    location.href = "https://xxx.xxx.com/user/login?returnPostURL=" + encodeURIComponent(location.href);
                },
                "99":function(){
                    location.href = "http://www.xxx.com/error.html";
                }
            }
        }
    }
    lufax.com.iframecb = new iframecb();
}(this);
function iframecbAsync(data){
    lufax.com.iframecb.map()[data.result](data);
}
