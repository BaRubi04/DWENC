let nota1,nota2,nota3,prom;
nota1 = Number(prompt("Primera nota: "));
nota2 = Number(prompt("Segunda nota: "));
nota3 = Number(prompt("Tercera nota: "));
prom = (nota1+nota2+nota3)/3;
prom >= 7 ? document.write("Promociona") : document.write("No promociona");