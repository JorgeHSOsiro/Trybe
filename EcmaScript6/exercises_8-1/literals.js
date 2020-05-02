const skills = ['javascript', 'html', 'css', 'java', 'github'];
const sentence = `Tryber x aqui!
Tudo bem?`

const searchX = (frase, palavra) => {
    let separa = frase.split(' ');
    for (let i = 0; i<separa.length; i++) {
        if (separa[i] === 'x') {
            separa[i] = palavra;
        }
    }
    let nova = separa.join(' ');
    return nova;
}

const showSkills = (func, array) => {
    array.sort();
    return `${ func } 
    Minhas cinco principais habilidades são:
    ${ array[0] }
    ${ array[1] }
    ${ array[2] }
    ${ array[3] }
    ${ array[4] }`
}
console.log(showSkills(searchX(sentence,'Jorge'), skills));
