class Escuela {
    constructor(nombre) {
        this.nombre = '';
        this.alumnos = [];
        this.materias = ['Matematicas', 'Ciencias', 'Historia', 'Ingles'];
        this.resumen = [];
        this.grupos = ['grupoA', 'grupoB', 'grupoC', 'grupoD'];
    }

    buscarAlumno() {}

    buscarTodosAlumnos() {}

    presentarResumen() {}

    listarMaterias() {}

    listarGrupos() {}

    registarAlumno(alumno) {
        this.alumnos.push(alumno);
    }
}