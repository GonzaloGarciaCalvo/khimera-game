import type { AnswerType } from "./types";

const redQuestions: AnswerType[] = [
  /* 


En dónde está Hasroun?

(mapa con 4 puntos)

A
B
C
D

  */
    {
    id: 0, statement:'En que año llegaron a Costa Rica Miguel Barzuna Mereb y Juana Sauma?', 
    correctAnswer: '1896', 
    status: 'undone', 
    options:['1886', '1906', '1896', '1888']
    },
    {
    id: 1, statement:'Cual es el segundo nombre de la tía Georgette?',
    correctAnswer: 'Lucía',
    status: 'undone',
    options:['Juana', 'Del Carmen', 'Layla', 'Lucía']
    },
    {
      id: 2, statement:'En dónde está Hasroun?',
      correctAnswer: 'B',
      status: 'undone',
      options:['A', 'B', 'C', 'D']
    }
  ];

  const blueQuestions: AnswerType[] = [
    {
      id: 0, statement:'Qué ingrediente no puede faltar en el Kibbeh Nayeeh?' , correctAnswer: 'Todos', status: 'undone', options:['Canela', 'Menta',  'Albahaca', 'Todos']
    },
    {
      id: 1, statement:'En donde estaba trabajando tía Georgette antes de su viaje en barco?', correctAnswer: 'Con unos comerciantes', status: 'undone', options:['En una oficina cerca del puerto', 'Con unos comerciantes', 'De traductora', 'Servicio postal']
    },
    {
      id: 2, statement:'En qué año desapareció la tía Georgette?', correctAnswer: '1927', status: 'undone', options:['1920', '1922', '1926', '1927']
    }
  ];

  const yellowQuestions: AnswerType[] = [
    {
      id: 0, statement:'Que le hace falta a la tía Georgette, según la carta que le escribió a los primos?' , correctAnswer: 'Kibbeh y conversación', status: 'undone', options:['Maamoul y café', 'Kibbeh y conversación', 'Ropa de Paris', 'Adornos para el pelo']
    },
    {
      id: 1, statement:'Que tipo de árbol tiene la bandera de Líbano?', correctAnswer: 'Cedro', status: 'undone', options:['Ciprés', 'Enebro', 'Cedro', 'Pino']
    },
    {
      id: 2, statement:'Cuantos años vivió tía Georgette en París?', correctAnswer: '3', status: 'undone', options:['1', '2', '3', '4']
    }
  ];
  export { redQuestions, blueQuestions, yellowQuestions };