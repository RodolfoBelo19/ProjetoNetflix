document.onmousemove = function(e) {
    document.getElementById("logo").style.transform = "scale("
        +e.clientX*0.001 +")";
}