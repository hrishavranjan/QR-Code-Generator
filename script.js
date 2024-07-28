document.getElementById('generate-btn').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    if (text) {
        var qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = ""; 
        qrcodeContainer.style.display = 'flex'; 
        new QRCode(qrcodeContainer, {
            text: text,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        alert("Please enter text to generate a QR code.");
    }
});

document.getElementById('refresh-btn').addEventListener('click', function() {
    location.reload();
});
