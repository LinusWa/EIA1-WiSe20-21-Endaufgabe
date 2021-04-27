var schuhbestand = [
    {
        marke: "Adidas",
        modell: "Fußballschuh",
        groesse: 42
    },
    {
        marke: "Puma",
        modell: "Tennisschuh",
        groesse: 46
    }
];
function sizecheck(size) {
    for (var index = 0; index < schuhbestand.length; index++) {
        var schuhliste;
        if (index == 0) {
            schuhliste = [];
        }
        if (schuhbestand[index].groesse == size) {
            schuhliste.push(schuhbestand[index].marke + " " + schuhbestand[index].modell);
        }
        if (index == schuhbestand.length - 1)
            console.log("In Größe " + size + " sind folgende Schuhe verfügbar: " + schuhliste);
    }
}
sizecheck(42);
/* var schuhbestand: string[] = ["Adidas", "Puma", "Nike"];

console.log(schuhbestand);

console.log(schuhbestand[2]);

console.log("Anzahl der Schuhe im Bestand: " + schuhbestand.length);

schuhbestand.push("Reebok"); // Hinzufügen am Ende des Arrays

schuhbestand.unshift("Reebok"); // Hinzufügen am Anfang des Arrrays

schuhbestand.pop(); // Entfernt den letzten Wert (und returnt ihn)

schuhbestand.shift(); // Entfernt den ersten Wert (und returnt ihn)

console.log(schuhbestand);


console.log(schuhbestand);


var schuh = {
    marke: "Adidas",
    modell: "Fußballschuh",
    groesse: 42
};

console.log(schuh);

console.log(schuh.marke);

schuh.marke = "Nike";

console.log(schuh.marke); */
/*
    for (let index: number = 0; index < 5; index++) {
        console.log ("Schuh Nummer " + index + " ist verfügbar");
    }

*/
/*
var muenzwurf: number = Math.random(); // Zufällige Kommazahl zwischen 0 und 1

console.log (muenzwurf);

if (muenzwurf >= 0.5) {
    console.log("Das Ergebnis des Münzwurf ist Kopf");
}
else {
    console.log("Das Ergebnis des Münzwurf ist Zahl");
}

*/
//# sourceMappingURL=Beispielcode.js.map