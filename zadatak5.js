var aPolje = [];

for(var i = 0; i <= 50; i++)
{
    if(i % 7 == 0)
    {
        aPolje.push(i);
    }
}
var parniBrojevi = [];
for(var a = 0; a < aPolje.length; a++)
{
    if(aPolje[a] % 2 == 0)
    {
        parniBrojevi.push(aPolje[a]);
        console.log(aPolje[a]);
    }
}

for(var b = 0; b < parniBrojevi.length; b++)
{
    console.log(parniBrojevi[b]);
}