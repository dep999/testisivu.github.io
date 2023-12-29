document.addEventListener("DOMContentLoaded", function () {
    if (!getCookie("cookiesAccepted")) {
        showCookieBanner();
    }
});

function showCookieBanner() {
    var banner = document.getElementById("cookieBanner");
    if (banner) {
        banner.style.display = "block";
    }
}

function acceptCookies() {
    var banner = document.getElementById("cookieBanner");
    if (banner) {
        banner.style.display = "none";
        setCookie("cookiesAccepted", true, 365);
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();  // Trim leading and trailing whitespaces
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
