/* Esse script dá uma saudação pro user baseado no horário do dia.*/

var today = new Date();

var hour = today.getHours();

var gretting;

if (hour > 18){
    gretting = 'Boa noite!';
} else if (hour > 12) {
    gretting = 'Boa tarde!';
} else if (hour > 0) {
    gretting = 'Bom dia!';
} else {
    gretting ='Welcome!';
}

document.write('<h3>'+ gretting + '</h3>');