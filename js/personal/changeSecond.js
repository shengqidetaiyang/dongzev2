/* 
* @Author: Marte
* @Date:   2017-03-22 16:36:23
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-22 17:03:49
*/

$(document).ready(function(){
    var index = 60;
    var flag = true;
    $(".code").on("click",function(){
        var that = $(this);
        if(flag){
            var timer = setInterval(function(){
                index--;
                flag = false;
                if(index == 0){
                    index = 60;
                    flag = true;
                    clearInterval(timer);
                    that.text("获取验证码");
                }
                else{
                    that.text(index + " 秒");
                }
            },1000);
        }

    });    
});