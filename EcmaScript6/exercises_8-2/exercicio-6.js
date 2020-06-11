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

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

  const showAllStudents = (object) => {
      let class1 = object.lesson1.numeroEstudantes; 
      let class2 = object.lesson2.numeroEstudantes; 
      let class3 = object.lesson3.numeroEstudantes; 

      return class1 + class2 + class3;
  }

  console.log(showAllStudents(allLessons));