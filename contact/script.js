//----Bouton "Envoyer"----

let boutonEnvoyer = document.getElementById('boutonEnvoyer');
let spinIcon = document.querySelector(".fa-circle-notch");
let buttonText = document.querySelector(".buttontext");

boutonEnvoyer.addEventListener('click', function () {
    prenom.value = '';
    nom.value = '';
    email.value = '';
    message.value = '';

    spinIcon.style.display = "flex";
    buttonText.style.display = "none";
    spinIcon.classList.add("spinner");

    setTimeout(() => {
        spinIcon.style.display = "none";
        buttonText.textContent = "Message envoyé !";
        buttonText.style.display = "inline-block";

        setTimeout(() => {
            buttonText.classList.add("hidden");
            setTimeout(() => {
                buttonText.textContent = "Envoyer";
                buttonText.classList.remove("hidden");
            }, 500);
        }, 5000);
    }, 3000);
});