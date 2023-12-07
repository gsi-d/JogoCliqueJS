function IncrementaClique()
{
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    let novaPontuacao = parseInt(pontuacao.innerText) + parseInt(incremento.innerText);
    pontuacao.innerText= novaPontuacao;
    if(parseInt(novaPontuacao) >= 500){
        alert('Parabéns!, você ganhou!! Seus cliques somaram ' + novaPontuacao + ' pontos.');
    }
}

function DefineUpgrade(){
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    var inputElement = document.getElementById("inputUpgrade");
    console.log(inputElement.value);
    let novoIncremento;
    if(inputElement.value != null && inputElement.value != ''){
        console.log(inputElement.value)
        if(parseInt(inputElement.value) * 2 <= parseInt(pontuacao.innerText)){
            novoIncremento = inputElement.value;
            pontuacao.innerText = parseInt(pontuacao.innerText) - parseInt(inputElement.value) * 2;
            incremento.innerText= novoIncremento;
            inputElement.value = '';
        }
        else{
            alert('Você não possui pontos suficientes!');
        }
    }
    else{
        alert('Insira um valor válido!');
    }
    
}