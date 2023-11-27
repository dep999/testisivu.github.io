
function displayAlert() {
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');

    if (successParam === '1') {
        alert('Viesti lähetetty onnistuneesti');
    } else if (successParam === '0') {
        alert('Viestin lähetys epäonnistui');
    }
}


window.onload = displayAlert;
