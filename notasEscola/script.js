var nota1;
var nota2;
var nota3;
var media;
var situacao;

function analisarSituacao() {
    
    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    nota3 = parseFloat(document.getElementById('nota3').value);
    media = (nota1 + nota2 + nota3) / 3;
    situacao = (media >= 7) ?  "Aprovado" : "Reprovado";
    document.getElementById('situacao').innerHTML = "Sua situação acadêmica: "+situacao;
    document.getElementById('media').innerHTML = "Sua média: "+media;
}