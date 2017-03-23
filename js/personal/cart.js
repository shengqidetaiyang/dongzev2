/* 
* @Author: Marte
* @Date:   2017-03-21 15:30:31
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-22 11:58:07
*/

$(document).ready(function(){

 function load(){
    var length = $(".cartList li").length;
    for(var i = 0;i < length;i++){
        var temp = $(".cartList li").eq(i).find(".forth").text();
        temp = parseFloat(temp.slice(1,temp.length));
        var num = parseInt($(".cartList li").eq(i).find(".fifth").text());
        temp = temp * num;
        $(".cartList li").eq(i).find(".sixth").text('￥' + temp);
    }
 }
 function cal(arr){
    load();
    var total = 0;
    for(var i = 0;i < arr.length;i++){
        console.log(arr[i]);
        if(arr[i] == 1){
            var temp = $(".cartList li").eq(i).find(".sixth").text();
            temp = parseFloat(temp.slice(1,temp.length));
            total += temp;
        }
    }
    var minusLen = $(".contain .order .bottom .right .num p").eq(1).text().length;
    var plusLen = $(".contain .order .bottom .right .num p").eq(2).text().length;
    var minus = parseFloat($(".contain .order .bottom .right .num p").eq(1).text().slice(2,minusLen));
    var plus = parseFloat($(".contain .order .bottom .right .num p").eq(2).text().slice(1,plusLen));
    var end = total - minus + plus;
    $(".contain .order .bottom .right .num p").eq(0).text("￥" + total);
    $(".contain .order .bottom .right .num p").eq(3).text("￥" + end);
    $(".contain .order .submit .second").text("￥" + end);
 }
 var lens = $(".cartList li").length;
 var array = [];
 if( window.localStorage.getItem("array")){
    var m = window.localStorage.getItem("array");
    n = m.replace(new RegExp(',','gm'),'');
    var cc = 0;
    for(var l = 0;l < n.length;l++){
        var tt = parseInt(n.slice(l,l+1));
        if(tt ==1){
            cc++;
        $(".contain .order .cartList li").eq(l).addClass('active');  
        }
        array.push(tt);
    }
    $(".contain .order .bottom .left .words").text("已选（" + cc + "）");
    $(".contain .order .bottom .wrapCheckbox").addClass("active")
    if(cc == 0){
    $(".contain .order .bottom .wrapCheckbox").removeClass("active")       
    }
    cal(array);
 }
 else{
     for(var i = 0;i < lens;i++){
            array.push(0);
         }; 
     cal(array); 
 }
 var topFlag = 0; 
 $(".contain .order .cartList li .first .wrapCheckbox").each(function(index,ele){
        var count = 0;
        $(ele).on("click",function(){
        lens = $(".cartList li").length; 
            var flag = array[index];
            console.log("index",index);
            console.log("flag",flag);
            if(flag == 0){
                flag = 1;
                array[index] = 1;
                window.localStorage.setItem("array",array);
                cal(array);
                $(this).find("input").attr("checked",true); 
                count = 0;
                for (var k =0;k<lens;k++){
                    if(array[k] == 1){
                        count++;
                    }
                }
                $(".contain .order .bottom .wrapCheckbox").addClass("active");   
            }
            else if(flag == 1){
                flag = 0;
                array[index] = 0;
                window.localStorage.setItem("array",array);
                cal(array);
                $(this).find("input").removeAttr("checked");
                count = 0;
                for (var j =0;j<lens;j++){
                    if(array[j] == 1){
                        count++;
                    }
                }
                if(count == 0){
                    $(".contain .order .bottom .wrapCheckbox").removeClass("active");                      
                }
            }
            $(this).parent().parent().toggleClass('active');
            $(".contain .order .bottom .left .words").text("已选（" + count + "）");  
        })
 })
 $(".contain .order .top .first .wrapCheckbox").on("click",function(){
        $(this).toggleClass('active');
        if(topFlag == 0){
             topFlag = 1;
             lens = $(".cartList li").length;
             array = [];
             for(var i = 0;i < lens;i++){
                    array.push(1);
                 };  
            window.localStorage.setItem("array",array);
            cal(array);
             $(".contain .order .cartList li .first .wrapCheckbox").each(function(index,ele){
                    $(ele).find("input").attr("checked",true);
                    $(ele).parent().parent().addClass("active");
             })  
             $(".contain .order .bottom .wrapCheckbox").addClass("active");  
             $(".contain .order .bottom .left .words").text("已选（" + lens + "）");        
        }
        else if(topFlag == 1){
             topFlag = 0;
             lens = $(".cartList li").length;
             array = [];
             for(var i = 0;i < lens;i++){
                    array.push(0);
                 };  
             window.localStorage.setItem("array",array);
             cal(array);
             $(".contain .order .cartList li .first .wrapCheckbox").each(function(index,ele){
                    $(ele).find("input").removeAttr("checked",true);
                    $(ele).parent().parent().removeClass("active");
             })  
             $(".contain .order .bottom .wrapCheckbox").removeClass("active");  
             $(".contain .order .bottom .left .words").text("已选（" + 0 + "）");     
        }
 })
 });