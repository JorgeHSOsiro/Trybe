let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem:  "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim",
}  

  //console.log("Bem vinda " + info.personagem + "!");
  //console.log(info);

  //for (let i in info){
  //    console.log(i);
  //}

  //for (let i in info){
  //  console.log(info[i]);
  //}

  for (let i in info){
      if (i != "recorrente") {
        console.log(info[i] + " e " + info2[i]); 
      }else {
          console.log("ambos recorrentes");
      }
       
  }

  