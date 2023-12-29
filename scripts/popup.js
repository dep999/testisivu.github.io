function displayAlert() {
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');

    // Set a delay of, for example, 1000 milliseconds (1 second)
    const delay = 1000;

    if (successParam === '1') {
        // Show the success alert after the delay
        setTimeout(function() {
            alert('Viesti lähetetty onnistuneesti');
        }, delay);
    } else if (successParam === '0') {
        // Show the failure alert after the delay
        setTimeout(function() {
            alert('Viestin lähetys epäonnistui');
        }, delay);
    }
}

window.onload = displayAlert;
