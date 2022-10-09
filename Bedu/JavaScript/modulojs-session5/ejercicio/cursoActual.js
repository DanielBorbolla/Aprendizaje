const escuela = new Escuela('Patito');
let pregunta = 's';

do {
    const nombre = prompt('Nombre del Alumno: ');
    const grupo = prompt('Grupo del Alumno: ');
    const calificaciones = {};
    for(let materia of escuela.materias) {
        calificaciones[materia] = Number(prompt(`Calificacion de ${materia}`));
    }
    const alumno = new Alumno(nombre, grupo, calificaciones);
    alumno.calcularPromedio(escuela.materias);
    escuela.registarAlumno(alumno);
    pregunta = prompt('Registar otro alumno: [s]Si [n]No ').toLowerCase()
} while(pregunta === 's');


for (let alumno of escuela.alumnos) {
    alumno.verExpediente();
}