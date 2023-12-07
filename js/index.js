function IncrementaClique()
{
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    let novaPontuacao = parseInt(pontuacao.innerText) + parseInt(incremento.innerText);
    pontuacao.innerText= novaPontuacao;
}

function DefineUpgrade(){
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    var inputElement = document.getElementById("inputGrade");
    let novoIncremento;
    if(parseInt(inputElement.value) * 2 <= parseInt(pontuacao)){
        novoIncremento = inputElement.value;
        pontuacao.innerText = parseInt(pontuacao) - parseInt(inputElement.value) * 2;
    }
    else{
        alert('Você não possui pontos suficientes!');
    }
    incremento.innerText= novoIncremento;
}