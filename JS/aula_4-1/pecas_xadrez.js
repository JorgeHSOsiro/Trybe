let peca = "Rei";
peca = peca.toLowerCase();

if(peca == "peao"){
    console.log("1 casa para frente");
}else if (peca == "torre") {
    console.log("n casas na horizontal ou vertical");
}else if (peca == "bispo") {
    console.log("n casas na diagonal");
}else if (peca == "cavalo") {
    console.log("2 casas para frente e uma para o lado, ou esquerdo ou direito, formando um L");
}else if (peca == "rainha") {
    console.log("movimenta-se livremente pelo tabuleiro");
}else if (peca == "rei") {
    console.log("1 casa para qualquer casa adjacente (horizontal, vertical ou diagonal)");
}