function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}

var aBrojevi = [];

for(var i = 0; i < 50; i++ )
{
    var broj = dajSlucajanBroj(1, 20);
    aBrojevi.push(broj);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  var unique = aBrojevi.filter(onlyUnique);

  console.log(unique);