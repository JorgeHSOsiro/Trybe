let n = 5;
let escada = " ";
let star = "*";
let espaco = n;

for (let i = 0; i < n; i++ ) {
    for (let j = 0; j < n; j++) {
        if (j < espaco - 1){
            escada = escada + " ";
        } else {
            escada = escada + star;
        }
    }
    espaco -= 1;
    console.log(escada);
    escada = "";
}

