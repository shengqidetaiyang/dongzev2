/* 
* @Author: Marte
* @Date:   2017-03-17 16:04:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-23 17:25:40
*/

$(document).ready(function(){
        var len = $(".orderBox").find("li").length;
        console.log(len);
        len = len - 1;
        function calPre(){
            for(var i = 0;i <= len;i++){
                var text = $(".orderBox li .third").eq(i).text();
                text = text.slice(1,text.length);
                text = parseFloat(text);
                $(".orderBox li .fifth").eq(i).text('￥' + text);
            }            
        }
        function cal(){
            var tol = 0;
            for(var i = 0;i <= len;i++){
                var text = $(".orderBox li .fifth").eq(i).text();
                text = text.slice(1,text.length);
                text = parseFloat(text);
                tol += text; 
                tol = parseInt(tol*100);
                tol = parseFloat(tol/100);
            }
            $(".sum .third .num").text('￥' + tol);
        }
        $(".orderBox").find("li").eq(len).find(".first").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".second").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".third").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".forth").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".fifth").addClass('borderNone');  
        $(".forth .inner .plus").on("click",function(){
            var index = parseInt($(this).siblings('.num').text());
            var price = $(this).parent().parent().siblings('.third').text();
            price = parseFloat(price.substring(1,price.length));
            price = price * 100;
            index++;
            var total = price * index
            total = parseInt(total)/100;
            $(this).siblings('.num').text(index);
            $(this).parent().parent().siblings('.fifth').text("￥" + total);
            cal();
        })
        $(".forth .inner .minus").on("click",function(){
            var index = parseInt($(this).siblings('.num').text());
            var price = $(this).parent().parent().siblings('.third').text();
            price = parseFloat(price.substring(1,price.length));
            price = price * 100;
            if(index > 1){
                index--;                
            }
            else{
                index = 1;
            }
            var total = price * index
            total = parseInt(total)/100;
            $(this).siblings('.num').text(index);
            $(this).parent().parent().siblings('.fifth').text("￥" + total);
            cal();
        })
        $(".selectBox").on("click",function(){
            $(this).find(".inner").toggle();
            if($(this).find("input").attr("checked")){
                $(this).find("input").removeAttr("checked");
                $(this).parent().find(".code").attr('readonly',"true");
            }
            else{
                $(this).find("input").attr("checked",true);
                $(this).parent().find(".code").removeAttr('readonly');
            }
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
        calPre();
        cal();

});