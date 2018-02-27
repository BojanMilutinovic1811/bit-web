var active = function() {
    var ul = document.getElementsByTagName("ul");
    ul[1].children[1].className = "active";

}

var tesla = function() {
    var remove = document.getElementsByClassName("active");
    remove[0].className = "";
    console.log(remove);
}