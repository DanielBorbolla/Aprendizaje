class Alumno {
    constructor(nombre, grupo, calificaciones) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.calificaciones = calificaciones;
        this.estatus = '';
        this.promedio = 0;
    }

    calcularPromedio(materias) {
        let promedio = 0;
        for(let materia of materias) {
            promedio += this.calificaciones[materia];
        }
        this.promedio = promedio / materias.length;
        this.guardarEstatus();
    }

    guardarEstatus() {
        this.estatus = this.promedio < 7 ? 'Reprobo' : 'Aprobo';
    }

    presentarEstatus() {}

    verExpediente() {
        console.log(this.nombre)
        for(let calificacion of Object.keys(this.calificaciones)) {
            console.log(`${calificacion}: ${this.calificaciones[calificacion]}`)
        }
    }

}