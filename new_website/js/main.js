$(document).ready(function(){
    var winh=(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    var h = winh - 100;
    $(".minh").css({"min-height":h});
    $(".fixh").css({height:h});
    h = (winh-100)/2;
    $(".block_intro").css({height:h});
    fontmaking();
})

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