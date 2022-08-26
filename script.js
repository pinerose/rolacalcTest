const SELECTOR = input => document.querySelector(input);
const SELECTOR_ALL = input => document.querySelectorAll(input);

let character = ["Scarlet", "Jade", "Iris", "partner", "pet", "relic", "item"]

let ScarletClass = ["warrior", "knight", "lancer", "arcknight", "paladin", "berserker", "reaper"];
let JadeClass = ["mage", "sorcerer", "magister", "arcmage", "druid", "warlock", "summoner"];
let IrisClass = ["unreleased", "", "", "", "", "", ""];
let partners = ["elf", "halfren", "drokan", "feline", "chaser", "fanatic", "made"];
let pets = ["devil", "slime", "rabbit", "pumpkinrom", "angel", "fallen", ""];
let relics = ["", "", "", "", "", "", ""];
let items = ["", "", "", "", "", "", ""];

function char(charType) {
    switch (charType){
        case character[0]:
            for (let x of ScarletClass){
                var charClass = document.createElement("li");
                var charClassImg = document.createElement("img");
                charClassImg.src = `character/Scarlet/class/${x}.PNG`;
                charClass.appendChild(charClassImg);
            }
            break;
        case character[1]:
            break;
        case character[2]:
            break;
        case character[3]:
            break;
        case character[4]:
            break;
        case character[5]:
            break;
        case character[6]:
            break;
    }
}
