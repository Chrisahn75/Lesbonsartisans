/* Javascript:  pour ce second exercice, je vous demanderai d'écrire une fonction "getShortMessage" qui prendra en argument un Array et qui retournera un Array contenant tous les messages dont la longueur est inférieure strictement à 50 caractères. (Array.prototype ) */

function getShortMessage(messages) {
    return messages.filter(message => message.length < 50)
}

var tab = ["adozinazpodihaz oidjazpdojaz odiazhdh azpidhapẑodihazpdi hazp", "ee"];
console.log(getShortMessage(tab));