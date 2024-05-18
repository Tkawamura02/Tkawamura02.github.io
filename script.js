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

document.addEventListener('DOMContentLoaded', function() {
  var p = document.getElementById('intro-hello');
  p.innerHTML = '';
  var n = 0;
  var str = "hello world, it's tiffany.";

  var typeTimer = setInterval(function() {
    n = n + 1;
    p.innerHTML = "> " + str.slice(0, n);
    if (n === str.length) {
      clearInterval(typeTimer);
      p.innerHTML = "> " + str;
      n = 0;
      setInterval(function() {
        if (n === 0) {
          p.innerHTML = "> " + str + "|";
          n = 1;
        } else {
          p.innerHTML = "> " + str;
          n = 0;
        }
      }, 500);
    }
  }, 60);
});