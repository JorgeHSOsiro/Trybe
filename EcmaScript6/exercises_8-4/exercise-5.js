const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    let array = [];
    for (person in people) {
      array.push(greeting + people[person]);
    }
    return array;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  /*
    Use a variável parameter como parâmetro da função acima, escreva testes
    para verificar se a mesma está retornando a como se vê na variável result
    e, caso não esteja, altere o código para que ele passe nos testes.
    Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
    a função aos poucos:
  */
  assert.deepEqual(greetPeople(parameter), result);