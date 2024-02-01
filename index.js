const imagemVisualizacao =  document.getElementById('imagem-visualizacao')
const nomeCor = document.getElementById('nome-cor-selecionada')
const tituloProduto = document.getElementById('titulo-produto') 
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')


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
const opcoesTamanho =['41mm','45mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;
function trocarImagem(){
    const iDopcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = iDopcaoSelecionada.charAt(0);
    imagemVisualizacao.src ='./imagens/opcoes-cores/imagens-azul-inverno/imagem-' +imagemSelecionada+ '.jpeg';
} // charAt= caractere que está na posição


function trocarTamanho(){
    // autalizar variavel de controle da caixa 
const iDopcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
tamanhoSelecionado = iDopcaoSelecionada.charAt(0);
    //mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de  " + opcoesTamanho[tamanhoSelecionado];
    //mudar o tamanho da imagem de acordo com a opção
    if(opcoesTamanho[tamanhoSelecionado]==='41mm'){
    imagemVisualizacao.classList.add('caixa-pequena')
    } else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}
function trocarCor(){
    // atualizar cor selecionada 
const iDopcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
corSelecionada = iDopcaoSelecionada.charAt(0);
// trocar titulo da página 
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome   + " para caixa de  " + opcoesTamanho[tamanhoSelecionado];
    // trocar nome da cor
    nomeCor.innerText = "Cor - " +opcoesCores[corSelecionada].nome;

    // trocar imagens das miniaturas 
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoes-cores[corSelecionada].pasta + "/imagem-0.jpg";
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoes-cores[corSelecionada].pasta + "/imagem-1.jpg";
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoes-cores[corSelecionada].pasta + "/imagem-2.jpg";
    // trocar imagens visulização
imagemVisualizacao.src = '/imagens/opcoes-cores' + opcoes-cores[corSelecionada].pasta + '/imagem- '+imagemSelecionada + '.jpeg';

} 
