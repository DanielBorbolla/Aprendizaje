class Programador extends Persona {
    constructor(nombre, edad, genero, raza, colorCabello, colorOjos, ocupacion, lenguaje, experiencia, plataforma, certificaciones) {
        super(nombre, edad, genero, raza, colorCabello, colorOjos, ocupacion);
        this.lenguaje = lenguaje;
        this.experiencia = experiencia;
        this.plataforma = plataforma;
        this.certificaciones = certificaciones;
    }
}