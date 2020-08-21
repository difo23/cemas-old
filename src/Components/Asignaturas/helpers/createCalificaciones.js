import getData from '../../../api/getData';

async function createCalificaciones(boletin) {

    //Busco el curso al que pertenece el boletin para tomar los datos del estudiante
    let curso = await getData({
        url: '/curso',
        params: [{
            key: "codigo_calificaciones",
            value: `${boletin.codigo_curso}:${boletin.codigo_periodo}`
        }]
    });

    if (curso.length > 0) {
        let calificaciones = curso[0].estudiantes_inscritos.map((alumno, i) => {
            return {
                numero: alumno.numero,
                ago_sept_oct: 0,
                nov_dic_ene: 0,
                feb_mar: 0,
                abr_may_jun: 0,
                cf: 0
            };
        });

        boletin.calificacion_estudiantes = calificaciones;
        boletin.estudiantes = calificaciones.length;
        return boletin;
    }

    return false;
}

export default createCalificaciones;