function typeWriter(i, speed, name, txt) {
    if (i < txt.length) {
        document.getElementById(name).innerHTML += txt.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(i, speed, name, txt);
        }, speed);
    }
}

window.onload = function typeIntro() {
    typeWriter(0, 50, "intro-hello", "hello world, it's tiffany.");
}

function switchTab(evt, name) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-border-highlight", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.firstElementChild.className += " tab-border-highlight";
  }