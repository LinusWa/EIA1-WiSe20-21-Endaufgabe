var inputFieldName;
var inputFieldEmail;
var inputFieldPhone; // Die 3 Variablen sind Inputformelements in HTML
var outputList; // Liste wird als HTML Element ausgegeben
window.addEventListener("load", function () {
    document.querySelector("#addToContacts").addEventListener("click", function () {
        addToContacts();
    });
    createContactsList();
});
inputFieldName = document.querySelector("#inputName");
inputFieldEmail = document.querySelector("#inputEmail");
inputFieldPhone = document.querySelector("#inputPhone");
outputList = document.querySelector("#outputList");
var contactsList = [
    {
        name: "Martin Lotz",
        email: "martin@lotz.io",
        phone: "+49 (0) 17613138882"
    },
    {
        name: "Mathias Müller",
        email: "mathias@mueller.com",
        phone: "+49 (0) 160935798735"
    }
];
function addToContacts() {
    var newContact = {
        name: inputFieldName.value,
        email: inputFieldEmail.value,
        phone: inputFieldPhone.value
    };
    contactsList.push(newContact);
    createContactsList(); // Welche funktion ist hier gemeint? True muss weg I guess, und dann createContactslist
}
function createContactsList() {
    for (var index_1 = 1; index_1 < contactsList.length; index_1++) { // Index ist 1, solange index unter der länge der Kontaktliste ist wird der Code ausgeführt, Index wird inkrementiert
        outputList.innerHTML += "<li>" + contactsList[index_1].name +
            " | " + contactsList[index_1].email +
            " | " + contactsList[index_1].phone + "</li>";
    }
}
//# sourceMappingURL=babitz.js.map