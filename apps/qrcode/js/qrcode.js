const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const qrText = document.querySelector('.qr-text');
const sizes = document.querySelector('.sizes');
let qrCode = document.querySelector('#qr-code');

dark.addEventListener('input', handleDarkColor);
light.addEventListener('input', handleLightColor);
qrText.addEventListener('input', handleQRText);
sizes.addEventListener('change', handleSizes);

const defaultText = "www.imfs.edu.br";

let colorDark = "#000";
let colorLight = "#fff";
let text = defaultText;
let size = 300;

function handleDarkColor(e) {
    colorDark = e.target.value;
    generateQRCode();
}

function handleLightColor(e) {
    colorLight = e.target.value;
    generateQRCode();
}

function handleQRText(e) {
    text = e.target.value;
    if(!text){
        text = defaultText;
    }
    generateQRCode();
}

function handleSizes(e) {
    size = e.target.value;
    generateQRCode();
    // console.log(size);
}

function generateQRCode() {
    qrCode.innerHTML = ""
    new Thing("qr-code", {
        text,
        height: size,
        width: size,
        colorDark,
        colorLight,
    });
}
generateQRCode();