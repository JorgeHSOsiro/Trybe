const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const verifyPair = (object, key, value) => {
      let pair = Object.entries(object);
      for (i in pair) {
          if(pair[i][0] == key && pair[i][1] == value) {
              console.log(`Atributo ${pair[i][0]} de valor ${pair[i][1]} existe`);
          } else {
              console.log('Atributo não existe');
          }
      }
  }

  verifyPair(lesson3, 'turno', 'noite')