window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >= 0 || document.documentElement.scrollTop >= 0) {
        document.getElementById("myBtn").style.display = "block";
    } 
}
