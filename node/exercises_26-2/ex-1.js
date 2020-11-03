function checkNumberParams(a, b, c) {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      return reject(new Error("Digite apenas numeros"));
    }
    resolve(a+b);
  }).then((res) => {
      if (res * c < 50) {
          return Promise.reject(new Error("Valor muito baixo"))
      }
      console.log(res*c);
      return(res*c);
  })
}

checkNumberParams(1, 2, 50);
