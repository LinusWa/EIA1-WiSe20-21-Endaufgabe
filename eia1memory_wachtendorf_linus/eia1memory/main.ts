/*

            EIA 1 Memory - Linus Wachtendorf - 266817

INFO: 
Hier und da gibt es eventuell Anweisungen und Bedingungen die überflüssig sind. Diese sind im Entwicklungsprozess irgendwann ersetzt worden.
Da sie nicht schaden und mir persönlich helfen, meine Gedankengänge bei der Entwicklung nachzuvollziehen sind sie nicht entfernt worden.
*/

var colors: string[] = ["red", "blue", "green", "brown", "cyan", "purple", "orange", "pink", "white", "lime", "magenta", "teal", "silver", "yellow", "gold", "yellowgreen"];
var sentences1: string[] = ["Eine Variable die mit „const“ deklariert wurde…", "Mit Array- name.push wird ein Wert…", "Mit Array- name.pop() wird ein Wert…", "Um Typescript im Browser zu verwenden muss…", "HTML ist…", "CSS ist…", "TypeScript ist…", "Die IF-Anweisung…", "Eine for-schleife…", "i++ entspricht…", "Der EventListener…", "Im Hexadezimal- system…", "Die Aussage „Die erste Stelle eines Arrays hat immer den Index 0“ ist…", "Die Aussage „Es gibt auch fußgesteuerte Schleifen“ ist…", "Der Vergleichs- operator „>=“ bedeutet…", "Der Vergleichs- operator „!=“ bedeutet…"];
var sentences2: string[] = ["…lässt sich nachträglich nicht mehr ändern.", "…am Ende des Arrays hinzugefügt.", "…am Ende des Arrays entfernt.", "…es erst zu Javascript transpiliert werden.", "…das Grundgerüst und der Inhalt einer Webseite.", "…für die Gestaltung und das Aussehen zuständig.", "…für Veränderung des Inhalts und des Aussehens zuständig.", "…erlaubt, Bedingungen für den Code aufstellen.", "…wird ausgeführt, bis die Bedingung nicht mehr erfüllt ist.", "… i = i + 1.", "…wird aktiviert, wenn ein definiertes Ereignis stattfindet.", "…sind 15 Werte pro Stelle/Zeichen möglich.", "…Falsch.", "…Wahr", "…größer gleich.", "…nicht gleich."];
var icons: string[] = ["assets/icons/address-book.svg", "assets/icons/building.svg", "assets/icons/calendar.svg", "assets/icons/clock.svg", "assets/icons/eye.svg", "assets/icons/flag.svg", "assets/icons/heart.svg", "assets/icons/laugh.svg" ];

interface Card {  
    color: string;
    icon: string;
    sentence: string;
}
/*
Eine Karte besteht aus einer Farbe, einem Icon und einem Satz.
Die Informationen dazu werden in den obigen Arrays gespeichert und unten ins Kartenobjekt eingefügt.
Da jedes Farbpaar eine eigene exklusive Farbe hat, wird kein extra Index für Kartenpaare benötigt.
Ab Karte 17 haben die Karten alle das selbe Icon, da diese Karten nur fürs schwere Spiel benötigt werden,
in welchem es keine Piktogramme gibt.
*/

const cards: Card[] = [
    {
        color: colors[0],
        icon: icons[0],
        sentence: sentences1[0]
    },
    {
        color: colors[0],
        icon: icons[0],
        sentence: sentences2[0]
    },
    {
        color: colors[1],
        icon: icons[1],
        sentence: sentences1[1]
    },
    {
        color: colors[1],
        icon: icons[1],
        sentence: sentences2[1]
    },
    {
        color: colors[2],
        icon: icons[2],
        sentence: sentences1[2]
    },
    {
        color: colors[2],
        icon: icons[2],
        sentence: sentences2[2]
    },
    {
        color: colors[3],
        icon: icons[3],
        sentence: sentences1[3]
    },
    {
        color: colors[3],
        icon: icons[3],
        sentence: sentences2[3]
    }, 
    // Ende Leicht
    {
        color: colors[4],
        icon: icons[4],
        sentence: sentences1[4]
    },
    {
        color: colors[4],
        icon: icons[4],
        sentence: sentences2[4]
    },
    {
        color: colors[5],
        icon: icons[5],
        sentence: sentences1[5]
    },
    {
        color: colors[5],
        icon: icons[5],
        sentence: sentences2[5]
    },
    {
        color: colors[6],
        icon: icons[6],
        sentence: sentences1[6]
    },
    {
        color: colors[6],
        icon: icons[6],
        sentence: sentences2[6]
    },
    {
        color: colors[7],
        icon: icons[7],
        sentence: sentences1[7]
    },
    {
        color: colors[7],
        icon: icons[7],
        sentence: sentences2[7]
    }, 
    // Ende Medium
    {
        color: colors[8],
        icon: icons[7],
        sentence: sentences1[8]
    },
    {
        color: colors[8],
        icon: icons[7],
        sentence: sentences2[8]
    },
    {
        color: colors[9],
        icon: icons[7],
        sentence: sentences1[9]
    },
    {
        color: colors[9],
        icon: icons[7],
        sentence: sentences2[9]
    },
    {
        color: colors[10],
        icon: icons[7],
        sentence: sentences1[10]
    },
    {
        color: colors[10],
        icon: icons[7],
        sentence: sentences2[10]
    },
    {
        color: colors[11],
        icon: icons[7],
        sentence: sentences1[11]
    },
    {
        color: colors[11],
        icon: icons[7],
        sentence: sentences2[11]
    },
    {
        color: colors[12],
        icon: icons[7],
        sentence: sentences1[12]
    },
    {
        color: colors[12],
        icon: icons[7],
        sentence: sentences2[12]
    },
    {
        color: colors[13],
        icon: icons[7],
        sentence: sentences1[13]
    },
    {
        color: colors[13],
        icon: icons[7],
        sentence: sentences2[13]
    },
    {
        color: colors[14],
        icon: icons[7],
        sentence: sentences1[14]
    },
    {
        color: colors[14],
        icon: icons[7],
        sentence: sentences2[14]
    },
    {
        color: colors[15],
        icon: icons[7],
        sentence: sentences1[15]
    },
    {
        color: colors[15],
        icon: icons[7],
        sentence: sentences2[15]
    }        
];


var easycards: Card[] = cards.slice(0, 8); // Karten für das leichte Spiel sind die ersten 8 (zu beachten, bei slice wird letztes Element nicht miteinbezogen, daher Ende 8 und nicht 7)
var mediumcards: Card[] = cards.slice (0, 16); // Karten für das mittlere Spiel sind die ersten 16
var hardcards: Card[] = cards; // Karten für das schwere Spiel sind alle
var difficulty: string; // Für die Zusammenfassung am Ende
var scoreplayer: number;
var scorenpc: number;
var totalscore: number;
var playerturn: boolean = true;
var flippedcards: number = 0; // Anzahl der aktuell gedrehten Karten
var flippedcolor: HTMLElement[] = []; // Array, welches die vom Spieler aktuell umgedrehten Karten erhält
var counter: number; // Die Sekunden, wie lange das Spiel schon geht.
var timer: NodeJS.Timeout; // Wird später der Timer zugewiesen, ist notwendig um den Timer stoppen zu können.

// Einige öfters verwendete HTMLElemente bekommen eigene Variablen zugewiesen.

const main: HTMLElement = document.querySelector(".main"); // In Main werden die Karten platziert
const popup: HTMLElement = document.querySelector(".popup"); // Das Popup ist für die Zusammenfassung und die Auswahl der Schwierigkeit zuständig
const resultmessage: HTMLElement = document.getElementById("resultmessage"); // Hier wird am Ende die Zusammenfassung reingeschrieben
var win: HTMLAudioElement = new Audio("assets/sounds/win.mp3"); // Fanfare bei Sieg
var loss: HTMLAudioElement = new Audio("assets/sounds/loss.mp3"); // Traurige Trompete bei Niederlage



function runtimer(): void {
timer = setInterval(counting, 1000);
}

function counting(): void {
    counter = counter + 1;
//    console.log(counter);
}
function stopTimer(): void {
    clearInterval(timer);
}

/* 
runTimer führt einmal pro Sekunde die Funktion counting aus, counting zählt jedesmal lediglich um 1 hoch.
so ergebt sich ein einfacher Timer für die Dauer des Spiels in Sekunden.
Der Timer muss am Ende gestoppt werden, sonst läuft er beim erneuten Starten zweimal, zählt also immer schneller hoch.
Alternativ könnte man den Timer einmalig beim laden ausführen und jedes Mal die Sekundenanzahl auf 0 setzten.
*/


window.addEventListener("load", function(): void { 
    setdifficulty(); 
});

// Nachdem die Seite geladen hat wird zuerst die Schwierigkeitsauswahl gestartet.


function setdifficulty(): void { 
    popup.classList.remove("invis"); // Popup wird sichtbar bei aufruf

    document.querySelector("#leicht").addEventListener("click", function(): void {      // leicht startet leichtes Spiel etc.
        starteasygame();
    });
    document.querySelector("#mittel").addEventListener("click", function(): void { 
        startmediumgame();
    });
    document.querySelector("#schwer").addEventListener("click", function(): void {
        starthardgame();
    });
}
// Die Funktion setdifficulty kümmert sich um die Auswahl der Schwierigkeit, das Funktioniert über Buttons die dem Nutzer angezeigt werden.


function reset(): void {    
    popup.classList.add("invis");
    flippedcards = 0;   // Die Anzahl der aktuel gedrehten Karten wird auf 0 gesetztet.
    easycards.sort ((a, b) => 0.5 - Math.random());     // Die drei Arrays der verschiedenen Schwierigkeiten werden zufällig gemischt, hier recht einfach
    mediumcards.sort ((a, b) => 0.5 - Math.random());
    hardcards.sort ((a, b) => 0.5 - Math.random());
    scoreplayer = 0;    // Spieler und Computer haben 0 Punkte.
    scorenpc = 0;
    document.getElementById("scorep").innerHTML = "Spieler: " + scoreplayer;    // Die Scoreanzeigen für den Nutzer werden auf 0 gesetzt. 
    document.getElementById("scoren").innerHTML = "Computer: " + scoreplayer;
    playerturn = true;      // Der Spieler ist zuerst an der Reihe
    counter = 0; // Timer wird resetett.
}
// Die Resetfunktion sorgt dafür, dass jedes Spiel von neu beginnt. Es werden alle veränderten global definierten Variablen zurückgesetzt.
// Die Arrays der verschiedenen Schwierigkeiten werden zufällig gemischt.


function starteasygame(): void {
    reset();    // Zunächst führt die Funktion einen reset durch 
    difficulty = "leicht";      // Für die Zusammenfassung am Ende wird die Schwierigkeit in die Variable geschrieben.
    randomplacement(8);     // Der Funktion randomplacement wird mitgeteilt, dass mit 8 Karten gespielt wird.
    game(4);    // Das Spiel wird gestartet, es sind insgesamt 4 Paare zu ergattern.
}


function startmediumgame(): void {
    reset();
    difficulty = "mittel";
    randomplacement(16);
    game(8);
}


function starthardgame(): void {
    reset();
    difficulty = "schwer";
    randomplacement(32);
    game(16);
}


function randomplacement(cardamount: number): void {
    for (let index: number = 0; index < cardamount; index++) { // For schleife läuft so oft durch, wie Karten aufs Feld gebracht werden sollen.
        let newElement: HTMLElement = document.createElement("div"); // Für die Rückseite wird ein neues Element einer Variable zugewiesen
        let frontside: HTMLElement = document.createElement("div"); // Für die Vorderseite ebenso
        

        switch (cardamount) {
        case 8:
            let coloreasy: string = " invis" + " " + easycards[index].color + " card"; 
            
            // Jede Karte bei jeder Schwierigkeit erhält zunächst eine Farbe als Klasse, sowie die Klasse "invis" um unsichtbar zu bleiben und die Klasse "card"

            let easyPictogramm: HTMLImageElement = document.createElement("img"); // im Falle der Karten mit Piktogramm wird ein neues Bildelement erstellt.
            easyPictogramm.setAttribute("src", easycards[index].icon); // Dem Bildelement wird das der Karte entsprechenden Pikogramm zugeordnet
            frontside.appendChild(easyPictogramm); // Das Bildelement wird als Unterelement der Vorderseite der Karte angefügt.
            frontside.setAttribute("class", coloreasy); // Die Vorderseite erhält die drei oben definierten Klassen angefügt.
            break;
        case 16:
            let colormedium: string = " invis" + " " + mediumcards[index].color + " card";    
            let mediumPictogramm: HTMLImageElement = document.createElement("img");
            mediumPictogramm.setAttribute("src", mediumcards[index].icon);
            frontside.innerHTML = mediumcards[index].sentence; // Wenn die Karte einen EIA-Satz enthält wird ihr dieser ins innere HTML geschrieben.
            frontside.appendChild(mediumPictogramm); // Danach wird das Piktogramm hinzugefügt, sonst würde das Piktogramm wieder überschrieben werden.
            frontside.setAttribute("class", colormedium); 
            break;
        case 32: 
            let colorhard: string = " invis" + " " + hardcards[index].color + " card";    
            frontside.innerHTML = hardcards[index].sentence;
            frontside.setAttribute("class", colorhard);
            break;
        }
        
        
        newElement.appendChild(frontside); // Der Rückseite wird die Vorderseite als Unterelement angefügt
        newElement.setAttribute("class", " back"); // Die Rückseite bekommt die Klasse "back"
        main.appendChild(newElement); // Die zusammengesetzte Karte wird dem main untergeordnet-

    }
}
/*
Die Funktion randomplacement ist zuständig dafür, dass die Karten erstellt und zufällig platziert werden:
Die Funktion läuft dank einer Vorschleife so oft durch, bis die Anzahl der gewünschten Karten erstellt wurde.
Wie die Karten erstellt werden, hängt dabei von der Schwierigkeit bzw. der Anzahl der Karten ab.
Da die Arrays mit den Spielkarten bereits im reset gemischt wurde, ist das hier nicht notwendig.
*/


function cardflip(): void { 
    if (playerturn === true) { // Überprüfung ob der Spieler am Zug ist
        document.body.classList.remove("noclick"); // Klicken wird erlaubt.
        // console.log(playerturn); 
        this.children[0].classList.toggle("invis"); // Macht die Vorderseite sichtbar.
        this.classList.add("noclick"); // Verhindert, dass eine Karte wieder zugedeckt werden kann
        flippedcolor[flippedcards] = this.children[0]; // Das HTMLElement der gefundenen Karte wird einem Array zugewiesen
        flippedcards++; // Die Anzahl der gedrehten Karten wird inkrementiert
        if (flippedcards === 2) { // Wenn zwei Karten geklickt wurden werden sie wieder klickbar, und das Scoring beginnt.
            flippedcolor[0].parentElement.classList.remove("noclick");
            flippedcolor[1].parentElement.classList.remove("noclick");
            scoring(flippedcolor[0], flippedcolor[1]); // Input sind die beiden angeklickten Karten.
        }
    }
} 
/*
Die Funktion cardflip kümmert sich um das Aufdecken der durch den Spiel angeklickten Karten. 
Sie wird durch Klicks auf Karten aufgerufen, siehe funktion game.
Da die Vorderseiten unsichtbar sind, wird diese Unsichtbarkeit entfernt.
Eine geklickte Karte bekommt noclick, da im Memoryspiel das zurückdrehen von Karten nicht erlaubt ist.
Die geklickte Karte wird einem Array zugewisen
Wenn zwei Karten geklickt wurden, beginnt das Scoring
*/


function gameover(): void { 
    stopTimer();
    main.innerHTML = "";        // Löscht alle Karten der vorherigen Spiele, die sonst unsichtbar wären. Findet hier Statt, um Popup nicht zu stören.

    if (scoreplayer > scorenpc) {
        resultmessage.innerHTML = "Glückwunsch! Sie haben gewonnen! <br> Das Spiel war auf " + difficulty + " gestellt.<br>Sie hatten einen Punktestand von " + scoreplayer + "!<br>Der Computer hatte ledglich " + scorenpc + "!<br>Das Spiel dauerte " + counter + " Sekunden.<br> Lust auf eine Revanche? ";
        win.play();
    }
    if (scoreplayer < scorenpc) {
        resultmessage.innerHTML = "Schade! Sie haben verloren! <br> Das Spiel war auf " + difficulty + " gestellt.<br>Sie hatten einen Punktestand von " + scoreplayer + "!<br>Der Computer hatte unglaubliche " + scorenpc + "!<br>Das Spiel dauerte " + counter + " Sekunden.<br> Lust auf eine Revanche?";
        loss.play();
    }
    if (scoreplayer === scorenpc) {
        resultmessage.innerHTML = "Unentschieden! <br> Das Spiel war auf " + difficulty + " gestellt.<br>Sie hatten einen Punktestand von " + scoreplayer + "!<br>Der Computer hatte ebenfalls " + scorenpc + "!<br>Das Spiel dauerte " + counter + " Sekunden.<br> Lust auf eine Revanche?";
    }
    popup.classList.remove("invis"); // Nach dem Anpassen wird das Popup sichtbar

}
/* 
Die Funktion gameover wird getriggert wenn alle Paare gefunden wurden und gibt je nach Resultat unterschiedliche Nachrichten und Sounds aus.
Die Deklaration und Wertezuweisung aller verwendeten Elemente und Variablen findet nicht hier statt, lediglich die Ausgabe.
Eine Besonderheit ist, dass hier die unsichtbaren Karten aus dem Spiel bereits gelöscht werden, nicht erst im Reset. Das liegt daran,
dass ansonsten das Popup verschoben würde. Ansonsten könnte man das Popup in CSS ändern, da das Spielfeld aber so oder so gelöscht werden muss,
wäre das überflüssiger Aufwand.
Hier könnte man auch statt drei if's eine Switch-case verwenden, lohnt sich allerdings bei 3 Optionen noch nicht.
*/


function scoring(card1: Element, card2: Element): void { 
    // console.log (card1);
    // console.log (card2);
    if (flippedcards === 2) { // if ist hier eigentlich nicht notwendig, vorher war cardflip und scoring eine Funktion. never touch a running system
        
       
        if (card1.className === card2.className) { // Die Farbe wird verglichen, Farbe ist bei allen Schwierigkeiten ein Alleinstellungsmerkal der Paare
            
            if (playerturn === true) { // Sollte die Farbe gleich sein wird ein Punkt verteilt.
                scoreplayer++; 
                document.getElementById("scorep").innerHTML = "Spieler: " + scoreplayer; // Die Anzeige im Bild wird aktualisiert nachdem ein Punkt gemacht wurde.
            }
            else {
                scorenpc++;
                document.getElementById("scoren").innerHTML = "Computer: " + scorenpc;
            }

            document.body.classList.add("noclick"); // Klicken wird untersagt
            setTimeout( () => { card1.parentElement.classList.toggle("found"); // Beide gefundenen Karten werden nach einem Delay unsichtbar und unklickbar
                                card2.parentElement.classList.toggle("found");
                                // var unfoundcards: NodeListOf<Element> = document.querySelectorAll("div:not(.found).back");  
                                document.body.classList.remove("noclick"); // Klicken wird nach Verzögerung zum Entfernen der Karten wieder erlaubt.
                                
                            }, 
                        1500); 
        }
        else {     // Wenn Falsch werden die Karten nach einem Delay wieder umgedreht.
            setTimeout( () => { card1.classList.toggle("invis"); 
                                card2.classList.toggle("invis");
                             
                        }, 
                        1000 );
            playerturn = !playerturn; // Der andere ist dran
        }

        if (playerturn === false)
            setTimeout (npcturn, 2000); // Sollte der Computer am Zug sein wird seine Funktion ausgeführt (nach einem delay)
        
        flippedcards = 0; // Anzahl der gedrehten Karten geht wieder auf 0
    }

    if (scorenpc + scoreplayer === totalscore) { // Wenn alle Paare aufgedeckt wurden wird das Spiel beendet
        gameover(); 
    }
}
/*
Die Funktion scoring macht einen Großteil des Spiels aus. Hier wird primär verglichen, ob die aufgedeckten Karten ein Paar sind.
Wenn sie ein Paar sind wird dem entsprechendem Spieler/Computer ein Punkt gegeben, welcher auch auf der Seite angezeigt wird.
Die aufgedeckten Karten werden nach Verzögerung unsichtbar. (Würden diese komplett verschwinden, z.B. durch display: none würde sich das Spielfeld verschieben)
Der gleiche Spieler ist erneut an der Reihe

Wenn die Karten kein Paar sind, werden sie nach Verzögerung wieder verdeckt. Es gibt keine Punkte, und der andere Spieler ist an der Reihe.
Wenn der Computer an der Reihe ist, wird die funktion npcturn nach kurzer Verzögerung ausgeführt, wenn der Nutzer dran ist darf er wieder klicken.

Der Eventlistener, der den Input des Nutzers steuert ist immer aktiv, deswegen ist es wichtig, durch den boolean playerturn und durch die Klasse noclick
zu verhindern, dass der Nutzer sich außerhalb seiner Erlaubnis an den Karten bedient.

Sind alle Paare aufgedeckt worden wird die Funktion gameover aufgerufen.
*/

function npcturn(): void {
    //console.log("attempting npcturn");
    // console.log(playerturn);

    var unfoundcards: NodeListOf<Element> = document.querySelectorAll("div:not(.found).back"); 

    // Alle Karten, die sich noch auf dem Spielfeld befinden, also die Klasse "back" besitzen und nicht die Klasse "found" werden in ein Array gesetzt.

    if (playerturn === false && unfoundcards.length > 1) { // Wenn der Computer dran sind und noch Karten auf dem Feld sind führt er seinen Zug durch
        document.body.classList.add("noclick");  // Während der Computer spielt hat der Spieler brav zu warten
        let cardpicked1: number = Math.round((Math.random() * (unfoundcards.length - 0.499)) - 0.5); // eine auf ganze Zahlen gerundete Zahl zwischen 0 und der Maximalen Anzahl der Karten auf dem Feld wird erstellt 
        
        do {    
              var cardpicked2: number = Math.round((Math.random() * (unfoundcards.length - 0.499)) - 0.5); // erneute Ziehung für die  Zweite Karte, solange bis sie nicht gleich der ersten ist.
        } while 
            (cardpicked1 === cardpicked2);

        // console.log(cardpicked1 + " " + cardpicked2);

        var temppicked1: Element = unfoundcards[cardpicked1].children[0]; // Aus dem Array mit allen ungefundenen Karten wird die Karte mit dem Index der zufälligen Zahl in eine Variable kopiert.
        var temppicked2: Element = unfoundcards[cardpicked2].children[0];
        // Die temporäre Variable kann man eventuell weglassen, hatte hiermit allerdings teilweise Fehler mit gelöst, die wahrscheinlich inzwischen woanders gelöst wurden.

        temppicked1.classList.toggle("invis"); // Die gewählten Karten werden Unsichtbar
        temppicked2.classList.toggle("invis");
        flippedcards = 2; 
        scoring(temppicked1, temppicked2); // Die Gewählten Karten werden in die Scoring-Funktion gespeist
        setTimeout( () => { 
                                    document.body.classList.remove("noclick");  
                                    // Nach einem delay darf der Spieler wieder klicken, sollte der Computer ein Paar gefunden haben wird ihm das allerdings direkt wieder untersagt.
                        }, 
                    1000 );
        
    }
}
/*
Der Computer erstellt sich für seinen Zug zunächst ein Array mit allen noch zugedeckten Karten. Daher weiß er, in welchem Zahlenbereich er
zufällige Zahlen errechnen soll.
Er erstellt eine zufällige Zahl zwischen 0 und 1, und multipliziert diese mit der Anzahl der Karten - 0.49. anschließend wird die Zahl gerundet
Der Grund warum die Rechnung -0.49 rechnet, statt -1, liegt daran, dass ansonsten die höchste Zahl, also die Karte mit dem höchsten Index 
und die niedrigste Zahl, also die Karte mit dem niedrigsten Index lediglich halb so wahrscheinlich wären wie alle anderen Karten.

Der Computer "würfelt" zwei Zahlen. Da er nicht zweimal die gleiche Karte aufdecken kann, würfelt er solange bis er zwei unterschiedliche Zahlen
hat. Diese zahlen werden dann als index in das Array der verfügbaren Karten eingesetzt und die daraus resultierende Karte einer Variable übergeben,
Beide Karten werden aufgedeckt und der scoring Funktion übergeben, die diese überprüft.
*/


function game(totalpairs: number): void {
    runtimer();
    totalscore = totalpairs; // Anzahl der Paare wird einer Variable zugewiesen, die auch außerhalb der Funktion verfügbar ist.
    const placedcards: NodeListOf<Element> = document.querySelectorAll(".back"); // Es werden alle Karten ausgewählt und einer Variable zugewiesen
    placedcards.forEach(card => card.addEventListener("click", cardflip)); // Bei allen Karten wird auf Klick gewartet, wenn geklickt wird die Funktion cardflip ausgeführt
}

/*
Die Funktion game start zunächst den Timer, und setzt dann die Anzahl der Paare als den gemeinsam zu erreichenden Score.
Anschließend werden alle verdeckten Karten ausgewählt und mit einem EventListener versehen, der auf Klicks wartet.
Wenn eine Karte geklickt wird, wird die Funktion cardflip ausgeführt.

Das Scoring und die Ziehung des Computers finden in einzelnen Funktionen statt, die durch cardflip bzw. dann durch scoring
aufgerufen werden.

*/

