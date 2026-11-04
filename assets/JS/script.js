const overlay = document.querySelector('.overlay');
const apriContatti = document.querySelector('#apri-contatti');
const chiusiContatti = document.querySelector('#chiusi-contatti');
const myForm = document.querySelector('form');
const submitForm = document.querySelector("#submit-form");

const dataForm = {
    name: "",
    email: "",
    contactReason:"",
    date: "",
    message: "",
    accepted: ""
};

apriContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
});

chiusiContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "none";
    document.body.style.overflow = "";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.style.display = "none";
        document.body.style.overflow = "";
    }
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "";
    }
});

// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();

// })