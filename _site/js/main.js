$(window).resize(function(){
    var winh=(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    $(".fullh").css({height:winh});
    if (winh<700) winh = 700;
    var h = winh - 102;
    $(".minh").css({"min-height":h});
    $(".fixh").css({height:h});
    h = (winh-102)*2/3;
    $(".halfh").css({height:h});
    $(".block_intro_out").css({height:h});
    $(".block_intro").css("display","none");
})
$(document).ready(function(){
    var winh=(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    $(".fullh").css({height:winh});
    if (winh<700) winh = 700;
    var h = winh - 102;
    $(".minh").css({"min-height":h});
    $(".fixh").css({height:h});
    h = (winh-102)*2/3;
    $(".halfh").css({height:h});
    $(".block_intro_out").css({height:h});
    $(".block_intro").css("display","none");
    fontmaking();

/*  ------------------------------------------
             JavaScript of Introduction 
    ------------------------------------------  */

    $(".block_intro_out").hover(            
        function() {
            $(this).children().fadeIn("fast");                         
        },
        function() {
            $(this).children().fadeOut("fast");                         
        });

/*  ------------------------------------------
             JavaScript of Nav-bar 
    ------------------------------------------  */

    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");                
            },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");                
        });
})   

/* affix the navbar after scroll below header */

$("#headingForIndex").affix({
     offset: {
        top: $(window).height()-$("#headingForIndex").height()
    }
});
$("#headingForPost").affix({
     offset: {
        top: $(".big_top").height()*0.5
    }
});
$(".signForNews img").addClass("img-responsive");
/*	------------------------------------------
	      Inherit from "www.youziku.com"
	------------------------------------------  */

function fontmaking() {
        var resultStr = $(".Microsoft_YaHei").text();
        var md5 = "";
        resultStr = Trim(resultStr);
        resultStr = SelectWord(resultStr);
        md5 = $.md5("d6858636a9194575b81f6b3a5b3d1606"+"Microsoft_YaHei" + resultStr);
        $.getJSON("http://www.youziku.com/webfont/CSSPOST?jsoncallback=?", { "id": md5, "guid": "d6858636a9194575b81f6b3a5b3d1606", "type": "5" }, function (json) {
            if (json.result == 0) $.post("http://www.youziku.com/webfont/PostCorsCreateFont", { "name": "Microsoft_YaHei", "gid": "d6858636a9194575b81f6b3a5b3d1606", "type": "5", "text": resultStr });
            else loadExtentFile("http://www.youziku.com/webfont/css?id=" + md5 + "&guid=" + "d6858636a9194575b81f6b3a5b3d1606" + "&type=5");
        });
}
