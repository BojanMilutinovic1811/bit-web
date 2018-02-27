var redback = function() {
    var ull = document.getElementsByTagName("ul");
    ull[1].className = "redback";
}

var selectLi = function() {
    var lili = document.getElementsByTagName("li");
    for (var i in lili) { lili[i].className = "blue"; }
}

var ul3 = function() {
    var ul3 = document.getElementsByTagName("ul");
    ul3[2].children[0].className = "blue";
    ul3[2].children[1].className = "blue";
}
var ul4 = function() {
    var ul3 = document.getElementsByTagName("ul");
    ul3[2].children[0].className = "redback";
    ul3[2].children[1].className = "redback";
}