/**
 * Created by jiangguizhu on 2017/8/17.
 */
function navtitleOclick(obj) {
    var arr = document.getElementById("nav-TitleClick").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i];
        a.style.borderTopColor ="rgba(56, 77, 101, 0.8)";
        a.style.borderTopWidth = "3px";
        a.style.borderTopStyle = "solid";
    };
    obj.style.borderTopColor ="orange";
    obj.style.borderTopWidth = "3px";
    obj.style.borderTopStyle = "solid";

}

