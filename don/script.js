//----------------------------------------LEAFLET----------------------------------------

var map = L.map('map').setView([43.4941, -1.4933], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([43.4941, -1.4933]).addTo(map);
marker.bindPopup('<b>Mains Tendues</b><br>Bayonne<br><a href="https://maps.app.goo.gl/FTHLoEkxDg7GijWc9">S\'y rendre</a>').openPopup();

//----------------------------------------PAYMENT SYSTEM----------------------------------------

//----Bouton sélection montant----

let boutonMontant = document.querySelectorAll('.boutonmontant');

boutonMontant.forEach(button => {
    button.addEventListener('click', function () {
        boutonMontant.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

//----Numéro de la carte----

let number = document.getElementById('number');

number.addEventListener('keyup', function (e) {
    let num = number.value;

    num = num.replace(/\D/g, '');

    if (num.length > 16) {
        num = num.slice(0, 16);
    }

    let newValue = '';
    for (let i = 0; i < num.length; i++) {
        if (i > 0 && i % 4 === 0) {
            newValue += ' ';
        }
        newValue += num[i];
    }

    number.value = newValue;
});

//----Date d'expiration----

let date = document.getElementById('date');

date.addEventListener('keyup', function (e) {
    let input = date.value;

    input = input.replace(/[^0-9\/]/g, '');

    if (e.which !== 8) {
        if (input.length === 2 && !input.includes('/')) {
            input += '/';
        }
    }

    if (input.length > 5) {
        input = input.slice(0, 5);
    }

    date.value = input;
});

//----CVV----

let cvv = document.getElementById('cvv');

cvv.addEventListener('keyup', function (e) {
    let cvvNum = cvv.value;

    cvvNum = cvvNum.replace(/[^0-9]/g, '');

    if (cvvNum.length > 3) {
        cvvNum = cvvNum.slice(0, 3);
    }

    cvv.value = cvvNum;
});

//----Nom----

let name = document.getElementById('name');

name.addEventListener('input', function (e) {
    let regex = /[^a-zA-Z]/g;
    name.value = name.value.replace(regex, '');
});

//----Bouton "Faire un don"----

let boutonDon = document.getElementById('boutonDon');
let spinIcon = document.querySelector(".fa-circle-notch");
let buttonText = document.querySelector(".buttontext");

boutonDon.addEventListener('click', function () {
    boutonMontant.forEach(button => button.classList.remove('selected'));
    number.value = '';
    date.value = '';
    cvv.value = '';
    name.value = '';

    spinIcon.style.display = "flex";
    buttonText.style.display = "none";
    spinIcon.classList.add("spinner");

    setTimeout(() => {
        spinIcon.style.display = "none";
        buttonText.textContent = "Merci pour votre don !";
        buttonText.style.display = "inline-block";

        setTimeout(() => {
            buttonText.classList.add("hidden");
            setTimeout(() => {
                buttonText.textContent = "Faire un don";
                buttonText.classList.remove("hidden");
            }, 500);
        }, 5000);
    }, 5000);
});