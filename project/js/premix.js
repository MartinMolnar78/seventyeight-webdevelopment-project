

function premix()
{   


    var num1,num2,vysledok;
    num1=Number(document.premix1.litre.value);
    num2=Number(document.premix1.pomer.value);
    vysledok=1/num2*num1*1000;
    const result = Number(vysledok.toFixed(2));
    document.premix1.vysledok.value=result+'ml';

}
