import type { AnswerType } from "./types";

const redQuestions: AnswerType[] = [
    {
    id: 0, statement:'Que signo zodiacal es el mas repetido entre los 17 del clan?', 
    correctAnswer: 'capricornio', 
    status: 'undone', 
    options:['aries', 'piscis', 'escorpio', 'capricornio']
    },
    {
    id: 1, statement:'En que año hicimos el primer viaje internacional los 5 originales?',
    correctAnswer: '1994',
    status: 'undone',
    options:['1986', '1989', '1991', '1994']
    },
    {
      id: 2, statement:'En donde nos sacamos esta foto?',
      correctAnswer: 'Guanajuato',
      status: 'undone',
      options:['Mirador Tiquicia', 'Cabañas La Condesa', 'San Miguel Allende', 'Guanajuato']
    }
  ];

  const blueQuestions: AnswerType[] = [
    {
      id: 0, statement:'Como se llamaba el primer perro de Tuto?' , correctAnswer: 'Tizoc', status: 'undone', options:['Infante', 'Huasteco', 'Marihuano', 'Tizoc']
    },
    {
      id: 1, statement:'En que año hicimos fiesta de Halloween en Villa Real?', correctAnswer: '2013', status: 'undone', options:['2012', '2013', '2014', '2015']
    },
    {
      id: 2, statement:'Cual es el ingrediente más característico de los queques de navidad de Mamama?', correctAnswer: 'Caramelo de farmacia', status: 'undone', options:['Ron casero', 'Frutas deshidratadas por ella misma', 'Caramelo de farmacia', 'Vainilla en rama']
    },
    {
      id: 3, statement:'Que artista es llamado “el ídolo”?', correctAnswer: 'Pedro Infante', status: 'undone', options:['Elvis Presley', 'Luis Miguel', 'Pedro Infante', 'Jon Bon Jovi']
    }
  ];

  const yellowQuestions: AnswerType[] = [
    {
      id: 0, statement:'En que fechas decora Tuto para navidad?' , correctAnswer: 'Primera semana de noviembre', status: 'undone', options:['Antes de Halloween', 'Primera semana de diciembre', 'Primera semana de noviembre', 'Segunda semana de noviembre']
    },
    {
      id: 1, statement:'Cuando fue la última vez que estuvieron los 7 nietos juntos?', correctAnswer: 'Julio 2025', status: 'undone', options:['Julio 2024', 'Diciembre 2025', 'Julio 2025', 'Enero 2026']
    },
    {
      id: 2, statement:'Que artista es llamado “el ídolo”?', correctAnswer: 'Pedro Infante', status: 'undone', options:['Elvis Presley', 'Luis Miguel', 'Pedro Infante', 'Jon Bon Jovi']
    }
  ];
  export { redQuestions, blueQuestions, yellowQuestions };