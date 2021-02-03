let inputFieldName: HTMLFormElement;
let inputFieldEmail: HTMLFormElement;
let inputFieldPhone: HTMLFormElement; // Die 3 Variablen sind Type Inputformelements in HTML
let outputList: HTMLElement; // Liste wird als HTML Element ausgegeben / ist vom type HTMLElement

window.addEventListener("load", function(): void { // Eventlistener führt Befehl erst aus wenn die Seite vollständig geladen wurde
    document.querySelector("#addToContacts").addEventListener("click", function(): void { // ID addToContacts wird gewählt, es wird auf einen Klick gewartet
        addToContacts(); // Bei Klick wird die Funktion addToContacts ausgeführt
    });
    createContactsList(); // Nach dem Laden der Seite wird Funktion createContactsList ausgeführt
});

inputFieldName = document.querySelector("#inputName"); // Die IDs der Inputfelder werden Variablen zugewiesen
inputFieldEmail = document.querySelector("#inputEmail");
inputFieldPhone = document.querySelector("#inputPhone");
outputList = document.querySelector("#outputList"); // Die ID des Outputfelds wird einer Variable zugewiesen
// Die Werte werden nicht den obrigen Variablen zugewisen, diese sind lediglich stellvertretend für den Code (const kann nicht verwendet werden

// Contact gibt die Form für das Object an (es werden name, email und phone gebraucht, alles drei string)
// contactList ist ein Array bestehend aus mehreren Objects welche sich an die Form von Contact richten
// newContact ist ein einziges Object, welches sich an die Form von Object richtet.
// newContact wird in die Contactlist gepusht.
 
interface Contact { 
    name: string;
    email: string;
    phone: string;
}

var contactsList: Contact[] = [ // Array mit dem Namen contactsList wird basierend auf der Form des Contact Interface erstellt.
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

function addToContacts(): void { // Hier wird ein neuer Kontakt aus einem Inputfeld heraus erstellt.

    var newContact: Contact = { // der Variable newContact wird aus den Inputfeldern ein neuer Kontakt zugewiesen, basierend auf der Form von Contact
        name: inputFieldName.value,
        email: inputFieldEmail.value,
        phone: inputFieldPhone.value
    };
    contactsList.push(newContact);

    createContactsList(); // Nachdem der Kontakt zum Array hinzugefügt wurde wird die Kontaktliste in HTML Ausgegeben (Leider doppelt)
}

function createContactsList(): void {
    for (let index: number = 0; index < contactsList.length; index++) { // Index ist 1, solange index unter der länge der Kontaktliste ist wird der Code ausgeführt, Index wird inkrementiert
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



