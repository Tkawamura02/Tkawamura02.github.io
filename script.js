$(document).ready(function() {
    $("#myNavBar [href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});