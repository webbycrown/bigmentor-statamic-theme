document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if consent is already stored (in localStorage or cookie)
    if (localStorage.getItem('cookieConsent') || getCookie('OptanonConsent')) {
        banner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        setCookie('OptanonAlertBoxClosed', new Date().toISOString(), 365);

        const consentValue = 'landingPath=NotLandingPage&datestamp=' + encodeURIComponent(new Date().toString()) +
            '&version=202403.1.0&groups=C0004:0,C0002:0,C0001:1,C0003:0&hosts=';
        setCookie('OptanonConsent', consentValue, 365);

        banner.style.display = 'none';
        // TODO: Initialize analytics, tracking scripts here
    });

    rejectBtn.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'rejected');
        setCookie('OptanonAlertBoxClosed', new Date().toISOString(), 365);

        const consentValue = 'landingPath=NotLandingPage&datestamp=' + encodeURIComponent(new Date().toString()) +
            '&version=202403.1.0&groups=C0004:0,C0002:0,C0001:0,C0003:0&hosts=';
        setCookie('OptanonConsent', consentValue, 365);

        banner.style.display = 'none';
        // TODO: Ensure tracking scripts do NOT run
    });
});
