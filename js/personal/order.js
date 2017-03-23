/* 
* @Author: Marte
* @Date:   2017-03-16 18:33:57
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-23 16:09:10
*/

$(document).ready(function(){
    $(".orderList .title img").on("click",function(){
        $(this).parent().parent().slideUp();
    })  
    $(".chooseBox .middle").on("click",function(){
        window.location.href = "../../html/personal/orderDetail.html";
    })
    var lens = $(".orderBox").length;
    for(var i = 0;i < lens;i++){
        var len = $(".orderBox").eq(i).find("li").length;
        len = len - 1;
        $(".orderBox").eq(i).find("li").eq(len).find(".first").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".second").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".third").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".forth").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".fifth").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".sixth").addClass('borderNone');
    }
    $(".success .down").on("click",function(){
        window.location.href = "../../html/personal/delivery.html";
    })
    $(".finish .down").on("click",function(){
        window.location.href = "../../html/personal/comment.html";        
    })
    for(var i = 0;i < $(".orderBox li .first p").length;i++){
        if( $(".orderBox li .first p").eq(i).text().length < 20){
            $(".orderBox li .first p").eq(i).addClass("hash");
        }
    }
    for(var i = 0;i < $(".orderBox li .second p").length;i++){
        if( $(".orderBox li .second p").eq(i).text().length < 20){
            $(".orderBox li .second p").eq(i).addClass("hash");
        }
    }
});