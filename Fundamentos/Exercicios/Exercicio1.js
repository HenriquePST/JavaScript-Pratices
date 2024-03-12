/* A nave espacial mais rapida ja construida pelo homem 
é a voyager 1, que alcança 278.280km/h. Em 27/07/2018, o planeta Marte e
chegou a ficar a 5700000km da terra, sendo assim, calcule em dias o tempo necessario 
para a nave chegar a marte*/

var velocidadeHora = 278280;
var distanciaMarte = 570000000;

var distanciaDia = velocidadeHora * 24;
console.log(distanciaDia);

var dias = distanciaMarte/distanciaDia;
console.log(dias);