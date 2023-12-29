// Check if cookies are enabled
function areCookiesEnabled() {
    try {
        document.cookie = "testcookie=test; SameSite=None; Secure";
        return document.cookie.indexOf("testcookie") !== -1;
    } catch (e) {
        return false;
    }
}

// Set cookie with SameSite=None; Secure attributes
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/; SameSite=None; Secure";
}

// Get cookie with error handling
function getCookie(name) {
    try {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    } catch (e) {
        return null;
    }
}

// Show cookie banner if cookies are enabled and the "cookiesAccepted" cookie is not set
function showCookieBanner() {
    if (areCookiesEnabled() && !getCookie("cookiesAccepted")) {
        var banner = document.getElementById("cookieBanner");
        if (banner) {
            banner.style.display = "block";
        }
    }
}

// Accept cookies and set the appropriate cookie
function acceptCookies() {
    var banner = document.getElementById("cookieBanner");
    if (banner) {
        banner.style.display = "none";
        setCookie("cookiesAccepted", true, 365);
    }
}

// Call showCookieBanner on DOMContentLoaded and when "Got it!" is clicked
document.addEventListener("DOMContentLoaded", showCookieBanner);
