let inputFieldName: HTMLFormElement;
let inputFieldEmail: HTMLFormElement;
let inputFieldPhone: HTMLFormElement; // Die 3 Variablen sind Inputformelements in HTML
let outputList: HTMLElement; // Liste wird als HTML Element ausgegeben

window.addEventListener("load", function(): void {
    document.querySelector("#addToContacts").addEventListener("click", function(): void { 
        addToContacts(); 
    });
    createContactsList();
});

inputFieldName = document.querySelector("#inputName");
inputFieldEmail = document.querySelector("#inputEmail");
inputFieldPhone = document.querySelector("#inputPhone");
outputList = document.querySelector("#outputList");

interface Contact {
    name: string;
    email: string;
    phone: string;
}

var contactsList: Contact[] = [
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

function addToContacts(): void {

    var newContact: Contact = {
        name: inputFieldName.value,
        email: inputFieldEmail.value,
        phone: inputFieldPhone.value
    };
    contactsList.push(newContact);

    createContactsList(); // Welche funktion ist hier gemeint? True muss weg I guess, und dann createContactslist
}

function createContactsList(): void {
    for (let index: number = 1; index < contactsList.length; index++) { // Index ist 1, solange index unter der länge der Kontaktliste ist wird der Code ausgeführt, Index wird inkrementiert
        outputList.innerHTML += "<li>" + contactsList[index].name +
                                " | " + contactsList[index].email + 
                                " | " + contactsList[index].phone + "</li>";
    }
}