document.getElementById("h1").style.visibility = "hidden";
document.getElementById("h2").style.visibility = "hidden";
document.getElementById("rr").style.visibility = "hidden";

function lesson1() {
    window.location="first.html";
}

function lesson2() {
    window.location="second.html";
}

function lesson3() {
    window.location="third.html";
}

function lesson4() {
    window.location="fourth.html";
}

function lesson5() {
    window.location="fifth.html";
}


function start() {
    var m= document.getElementById("back");
    document.getElementById("h1").style.visibility = "visible";
    document.getElementById("h2").style.visibility = "visible";
    document.getElementById("rr").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
    m.play();
}