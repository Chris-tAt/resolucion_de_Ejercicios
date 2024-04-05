// Problema 5: Operaciones con dos arreglos de objetos
// Supongamos que tenemos dos arrays de objetos, uno que contiene información sobre estudiantes y otro que contiene información sobre las asignaturas que están cursando. Cada objeto de estudiante tiene una propiedad id única y cada objeto de asignatura tiene una propiedad studentId que hace referencia al id del estudiante que está cursando esa asignatura.

// Escribe una función en JavaScript que tome estos dos arrays como entrada y devuelva un nuevo array con objetos que contengan información sobre los estudiantes y las asignaturas que están cursando.

// function mergeStudentAndSubjects(students, subjects) {

// }

// // Ejemplo de uso
// const students = [
//   { id: 1, name: 'Juan' },
//   { id: 2, name: 'María' },
//   { id: 3, name: 'Carlos' }
//   // Más objetos aquí..
// ];

// const subjects = [
//   { id: 1, studentId: 1, subject: 'Matemáticas' },
//   { id: 2, studentId: 1, subject: 'Física' },
//   { id: 3, studentId: 2, subject: 'Química' },
//   { id: 4, studentId: 3, subject: 'Biología' }
//   // Más objetos aquí...
// ];

// const mergedInfo = mergeStudentAndSubjects(students, subjects);
// console.log(mergedInfo);

function mergeStudentAndSubjects(students, subjects) {
  return subjects.map((subject) => {
    //el map crea un nuevo array, itera con los que estan dentro y ejecutando lo que estan dentro
    const searchStudent = students.find(
      (student) => student.id === subject.studentId
    ); //busca el primer elemento que cumpla con la condicion
    return {
      id: subject.id,
      studentId: searchStudent.id,
      name: searchStudent.name,
      subject: subject.subject,
    };
  });
}

const students = [
  { id: 1, name: "Juan" },
  { id: 2, name: "María" },
  { id: 3, name: "Carlos" },
];

const subjects = [
  { id: 1, studentId: 1, subject: "Matemáticas" },
  { id: 2, studentId: 1, subject: "Física" },
  { id: 3, studentId: 2, subject: "Química" },
];

const mergedInfo = mergeStudentAndSubjects(students, subjects);

console.log(mergedInfo);
