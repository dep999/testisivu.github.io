document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookiesAccepted")) {
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
        localStorage.setItem("cookiesAccepted", "true");
    }
}
