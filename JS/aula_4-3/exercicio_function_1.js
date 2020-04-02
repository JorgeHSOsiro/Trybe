function verificaPalindromo(string) {
    let invertido = string.split('').reverse('').join('');
    if (string === invertido) {
        return true;
    }else {
        return false;
    }
}

console.log(verificaPalindromo("natan"));