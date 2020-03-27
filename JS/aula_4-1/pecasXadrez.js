let peao = "1 casa para frente"
let torre = "n casas na horizontal ou vertical"
let bispo = "n casas na diagonal"
let cavalo = "2 casas para frente e uma para o lado, ou esquerdo ou direito, formando um L"
let rainha = "movimenta-se livremente pelo tabuleiro"
let rei = "1 casa para qualquer casa adjacente (horizontal, vertical ou diagonal)"

let peca = Peao;
peca = peca.toLowerCase();

if(peca == peao){
    console.log(peao);
}