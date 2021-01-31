var inputFieldName;
var inputFieldEmail;
var inputFieldPhone; // Die 3 Variablen sind Type Inputformelements in HTML
var outputList; // Liste wird als HTML Element ausgegeben / ist vom type HTMLElement
window.addEventListener("load", function () {
    document.querySelector("#addToContacts").addEventListener("click", function () {
        addToContacts(); // Bei Klick wird die Funktion addToContacts ausgeführt
    });
    createContactsList(); // Nach dem Laden der Seite wird Funktion createContactsList ausgeführt
});
inputFieldName = document.querySelector("#inputName"); // Die IDs der Inputfelder werden Variablen zugewiesen
inputFieldEmail = document.querySelector("#inputEmail");
inputFieldPhone = document.querySelector("#inputPhone");
outputList = document.querySelector("#outputList"); // Die ID des Outputfelds wird einer Variable zugewiesen
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
    createContactsList(); // Nachdem der Kontakt zum Array hinzugefügt wurde wird die Kontaktliste in HTML Ausgegeben (Leider doppelt)
}
function createContactsList() {
    for (var index = 0; index < contactsList.length; index++) { // Index ist 1, solange index unter der länge der Kontaktliste ist wird der Code ausgeführt, Index wird inkrementiert
        outputList.innerHTML += "<li>" + contactsList[index].name +
            " | " + contactsList[index].email +
            " | " + contactsList[index].phone + "</li>"; // Liste + name + email + phone
    }
}
/*
Grundlegende Dinge zu erklären:
Variablen??? (zu basic maybe)
HTML Elemente in Typescript einbinden? (DOM Manipulation maybe, ist glaub Lektion 6)
For Schleife
Array + Objects
*/ 
//# sourceMappingURL=babitz.js.map