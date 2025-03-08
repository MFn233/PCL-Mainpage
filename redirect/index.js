function redirect() {
    var div = document.getElementById("msg");
    var time = 4;
    var timer = setInterval(function() {
        if(time === 0) {
            div.innerHTML = "请等一下…";
            location.href = "https://mfn233.github.io/";
            clearInterval(timer);
        } else {
            div.innerHTML = "将在 " + time + " 秒后跳转";
            time--;
        }
    },1000);
}
