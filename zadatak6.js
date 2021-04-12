function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}

var aBrojevi = [];

for(var i = 0; i < 100; i++)
{
    var broj = dajSlucajanBroj(50, 5000);
    console.log(broj);
    aBrojevi.push(broj);
}


var parni = 0;
var neparni = 0;

aBrojevi.forEach(function(broj)
{
    if(broj % 2 == 0)
    {
        parni += 1;
    }
    else
    {
        neparni += 1;
    }
})

console.log(parni+"   "+neparni);

