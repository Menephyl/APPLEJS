const imagemVisualizacao =  document.getElementById('imagem-visualizacao')

const verdeCipreste ={
    nome:'Verde-cipreste',
    pasta:"imagens-azul-inverno"
}
const azulInverno = {
    nome: 'Azul-inverno',
    pasta:'imagens-azul-inverno',

};// variavel em objeto array

const meiaNoite ={
    nome:'Meia-noite',
    pasta:'imagens-meia-noite'
}
const estelar ={
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}
const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}
const opcoesCores =[verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

let imagemSelecionada = 1;

function trocarImagem(){
    const iDopcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = iDopcaoSelecionada.charAt(0);
    imagemVisualizacao.src ='./imagens/opcoes-cores/imagens-azul-inverno/imagem-' +imagemSelecionada+ '.jpeg'
} // charAt= caractere que está na posição
