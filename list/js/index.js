window.onload = function () {
    //点击切换按钮
     change();
}

var change = function () {
    document.getElementById("img1").onclick= function(){
        this.src="images/4.png";
    }
    document.getElementById("img2").onclick= function(){
        this.src="images/4.png";
    }
    document.getElementById("img3").onclick= function(){
        this.src="images/4.png";
    }
}