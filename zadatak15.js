function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}

var broj1 = dajSlucajanBroj(100, 100);
var broj2 = dajSlucajanBroj(100, 100);
var broj3 = dajSlucajanBroj(100, 100);

var zadnji1 = broj1 % 10;   
var zadnji2 = broj2 % 10;
var zadnji3 = broj3 % 10;

console.log(zadnji1, zadnji2, zadnji3);

if(zadnji1 == zadnji2 || zadnji1 == zadnji3 || zadnji2 == zadnji3)
{
    console.log("true");
}