'use strict';

let qrCode = document.getElementById('qrcode');
let color = document.getElementById('color');
let bgColor = document.getElementById('background');
let btn = document.querySelector('button');
let site = document.getElementById('textInput');
let colorInput = document.querySelector('.color-inputs');

colorInput.style.display = 'none';
// color.style.display = 'none';
// bgColor.style.display = 'none';

function CreateQR() {
    qrCode.innerHTML = '';
    if (site) {

        new QRCode(qrCode, {
            text: site.value,
            width: 260,
            height: 260,
            colorDark: color.value,
            colorLight: bgColor.value,
        });

        colorInput.style.display = 'flex';
        // color.style.display = 'block';
        // bgColor.style.display = 'block';
    }
}



btn.addEventListener('click', CreateQR);
color.addEventListener('input', CreateQR);
bgColor.addEventListener('input', CreateQR);