///---> FETCH DATA FROM NOWHERE <---///

// const array = ['Teiva', 'Nika', 'Tea', 'Orianne', 'Narii', 'Maryse', 'Ahuura', 'Kaniela', 'Matarii', 'Manuel', 'Revatua', 'Kim', 'Kaven', 'Teremu', 'Tinirau', 'Barry', 'Fabrice']
const array = ['angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'cle', 'coin', 'couloir', 'dossier', 'eau', 'ecole', 'ecriture', 'entree', 'escalier', 'etude', 'exterieur', 'fenetre', 'interieur', 'lavabo', 'lecture', 'lit', 'marche', 'matelas', 'maternelle', 'meuble', 'mousse', 'mur', 'peluche', 'placard', 'plafond', 'porte', 'portemanteau', 'poubelle', 'radiateur', 'rampe', 'recreation', 'rentree', 'rideau', 'robinet', 'salle', 'savon', 'serrure', 'serviette', 'siege', 'sieste', 'silence', 'sol', 'sommeil', 'sonnette', 'sortie', 'table', 'tableau', 'tabouret', 'tapis', 'tiroir', 'toilette', 'vitre', 'arrosoir', 'assiette', 'balle', 'bateau', 'boîte', 'bouchon', 'bouteille', 'bulles', 'canard', 'casserole', 'cuvette', 'douche', 'entonnoir', 'gouttes', 'litre', 'moulin', 'pluie', 'poisson', 'pont', 'pot', 'roue', 'plastique', 'saladier', 'seau', 'tablier', 'tasse', 'trous', 'verre', 'auto', 'camion', 'engin', 'feu', 'frein', 'garage', 'gare', 'grue', 'virage', 'vitesse', 'voyage', 'wagon']
/* SELECT AN RANDOM WORD */
const word = array[Math.floor(Math.random() * (array.length + 1))].toLowerCase()

console.log(array.length)

/* TURN WORD INTO ARRAY */
const getRandomWord = () => {
    let wordSplited = [...word]
    wordSplited = word.split(/(?!$)/u)
    return wordSplited
}

///---> GAME INITIALISING <---///

let counterError = 0
let counterSuccess = 0

document.querySelector('.keyboard').display = 'block'

/* INSERT TEMPLATE INTO HTML CONTAINER*/
const insertTemplateInHtmlTag = () => {
    /* CREATE VARIABLE FOR CONCAT TEMPLATE */
    let dummyTemplate = ''
    
    /* ADD ONE DIV PER LETTER */
    getRandomWord().forEach((letter, index) => {
        const template = '<div class="inline-letter">_</div>'
        dummyTemplate += template
    })
    /* INSERT NTO HTML AFTER LOOPING */
    document.querySelector('#word').innerHTML = dummyTemplate
    
}
insertTemplateInHtmlTag()

///---> CHECKING USER ENTRY <---///

console.log(getRandomWord())

const checkValue = (value) => {
    /* CHECK IF VALUE IS INCLUDED AND INSERT FOUND LETTER INTO HTML THEN INCREMENT COUNTER SUCCESS*/
    getRandomWord().forEach((letter, index) => {
        if (letter === value) {
            /* SELECT ALL OCCURENCE THEN PAINT BUTTON IN BLACK AND DISABLE IT*/
            document.querySelectorAll('.inline-letter')[index].innerHTML = letter
            document.querySelector(`#${letter}`).style.color = 'black'
            document.querySelector(`#${letter}`).onclick = null
            counterSuccess++
            // document.querySelector('#counter-success').innerHTML = counterSuccess
        }
    })
    /* IF VALUE ISNT INCLUDED INCREMENT COUNTER ERROR */
    if (!getRandomWord().includes(value)) {
        counterError++
        document.querySelector(`#${value}`).style.color = 'black'
        document.querySelector(`#${value}`).onclick = null
        // document.querySelector('#counter').innerHTML = counterError
    }
    /* INCREMENT COUNTER IF BAD LETTER */
    switch (counterError) {
        case 1: mainAnim()
            break;
        case 2: panelAnim()
            break;
        case 3: topWood()
            break;
        case 4: transWood()
            break;
        case 5: 
            /* PLAYER LOSE */
            deadBody()
            lose()
            break;
        default:
            break;
    }
    if (counterSuccess == getRandomWord().length) {
        win()
    }
}

///---> ANIMATION <---///

const mainAnim = () => {
    document.querySelector('.main-wood').style.bottom = 0
}
const panelAnim = () => {
    document.querySelector('.panel-wood').style.bottom = '90px'
    document.querySelector('.panel-wood').style.left = '260px'
    document.querySelector('.panel-wood').style.height = '50px'
    document.querySelector('.panel-wood').style.opacity = 1
}
const topWood = () => {
    document.querySelector('.top-wood').style.transform = 'rotate(360deg)'
    document.querySelector('.top-wood').style.opacity = 1
}
const transWood = () => {
    document.querySelector('.trans-wood').style.transform = 'scale(100%)'
    document.querySelector('.trans-wood').style.opacity = 1
}
const deadBody = () => {
    document.querySelector('.rope').style.display = 'block'
    // document.querySelector('.head').style.display = 'block'
    // document.querySelector('.body').style.display = 'block'
    document.querySelector('.head').style.bottom = '190px'
    document.querySelector('.body').style.bottom = '0px'
}
// deadBody()
///---> GAME OVER <---///

/* WIN */
const win = () => {
    document.querySelector('.keyboard').style.display = 'none'
    document.querySelector('.reset').style.display = 'block'
    document.querySelector('.message-box').style.display = 'flex'
}
const lose = () => {
    getRandomWord().forEach((letter, index) => {
        document.querySelector('.keyboard').style.display = 'none'
        document.querySelector('.reset').style.display = 'block'
        document.querySelectorAll('.inline-letter')[index].innerHTML = letter
    })
    for (let i = 0; i < 26; i++) document.querySelectorAll('.letter')[i].style.color = 'black'
}

///---> RESET GAME <---///

const resetGame = () => {
    document.location.reload()
}