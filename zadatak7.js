function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}

var aBrojevi = [];

for(var i = 0; i < 200; i++)
{
    var broj = dajSlucajanBroj(150, 1500);
    aBrojevi.push(broj);
}



console.log("Najmanji je: "+Math.min(...aBrojevi));
console.log("Najveci je: "+Math.max(...aBrojevi));
