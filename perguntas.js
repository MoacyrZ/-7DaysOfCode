//Exercicio 2
const visivelNome = document.querySelector('#nome')
const visivelIdade = document.querySelector('#idade')
const visivelLinguagem = document.querySelector('#linguagem')
const visivelResposta = document.querySelector('#resposta')
const btn = document.querySelector('.btn')

visivelLinguagem.style.display = 'none';
visivelIdade.style.display = 'none';
visivelResposta.style.display = 'none';

let i = 0;
var usuario = " ";
var idade = " ";
var linguagem = " ";

btn.addEventListener('click', function() {
    const conteudo = document.getElementById("maldito").value
    var input = document.querySelector("#maldito")
    if (i == 0) {
        usuario = conteudo;
        visivelIdade.style.display = 'block';
        visivelNome.style.display = 'none';
        visivelResposta.style.display = 'none';
        input.value = "";
	    input.focus();
        i++;
        
    }

    else if (i == 1) {
        idade = conteudo
        visivelIdade.style.display = 'none';
        visivelLinguagem.style.display = 'block';
        input.value = "";
	    input.focus();
        i++;
    }

    else {
        linguagem = conteudo
        visivelLinguagem.style.display = 'none';
        console.log('Olá ', usuario, ' você tem ', idade, ' anos de idade e está estudando ', linguagem, '.')
        visivelResposta.style.display = 'block';
        input.value = "";
	    input.focus();
        resultados()
        i=0
    }
})

function resultados() {
    document.getElementById("nomeUsuario").innerHTML = usuario;
    document.getElementById("idadeUsuario").innerHTML = idade;
    document.getElementById("linguagemUsuario").innerHTML = linguagem;
}