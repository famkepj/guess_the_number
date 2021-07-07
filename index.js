naam = prompt("Welkom! Wat is je naam?");

console.log("Hey " + naam);

var pcnummer = Math.floor(Math.random() * 25);

console.log(pcnummer);

let p = 5; 
// p = prompt ("hoeveel pogingen wil je?")
p--;

nummer = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

var gelijk = nummer == pcnummer;

do {
  if (gelijk) {
    console.log("Gefeliciteerd je hebt gewonnen");
     break;
  }
  else {
    console.log("Dat is niet correct. Je hebt nog " +p, "pogingen over");
    nummer = prompt ("voer nogmaals een nummer in van 0 tot 25");
    var gelijk = nummer == pcnummer;
    p--;
  }
} while (p >=1 );

console.log ("Het spel is afgelopen");
console.log ("Dag " +naam," Tot de volgende keer");




