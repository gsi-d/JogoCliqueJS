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

function PrimeiroUpgrade(){
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    let novoIncremento = 1;
    if (parseInt(pontuacao.innerText) >= 10) {
        pontuacao.innerText = parseInt(pontuacao.innerText) - 10;
        incremento.innerText = parseInt(incremento.innerText) + novoIncremento;        
    } else {
        alert('Você não possue pontuação suficiente')
    }
        
}
function SegundoUpgrade(){
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    let novoIncremento = 8;
    if (parseInt(pontuacao.innerText) >= 50) {
        pontuacao.innerText = parseInt(pontuacao.innerText) - 50;
        incremento.innerText = parseInt(incremento.innerText) + novoIncremento;        
    } else {
        alert('Você não possue pontuação suficiente')
    }
        
}

function TerceiroUpgrade(){
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    let novoIncremento = 32;
    if (parseInt(pontuacao.innerText) >= 100) {
        pontuacao.innerText = parseInt(pontuacao.innerText) - 100;
        incremento.innerText = parseInt(incremento.innerText) + novoIncremento;        
    } else {
        alert('Você não possue pontuação suficiente')
    }
        
}

 function ResetPont(){
    let pontuacao = document.getElementById("pontuacao");
    let incremento = document.getElementById("upgradePontuacao");
    pontuacao.innerText = 0 ;
    incremento.innerText = 1 ;

 }