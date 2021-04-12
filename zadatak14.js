var broj = 243;
var suma = 0;
var duljina = String(broj).length - 1;
var prvi = String(broj)[0];
var zadnji = String(broj)[duljina];
console.log(prvi);
console.log(zadnji);

suma = parseFloat(prvi) + parseFloat(zadnji);

if(broj > 99)
{
    console.log(suma);
}
