import getData from '../../../api/getData';

async function createCalificaciones(boletin) {

    //Busco el curso al que pertenece el boletin para tomar los datos del estudiante
    //TODO: hacer la busqueda por el ID del curso en cuestion.
    let curso = await getData({
        url: '/curso',
        params: [{
            key: "codigo_calificaciones",
            value: `${boletin.codigo_curso}:${boletin.codigo_periodo}`
        }]
    });

    console.log('Creacion de calificaciones', curso, curso.codigo_centro, boletin.codigo_centro)


    if (curso.length > 0 && curso[0].codigo_centro === boletin.codigo_centro) {
        let calificaciones = curso[0].estudiantes_inscritos.map((alumno, i) => {

            let calificacion = {};
            calificacion['numero'] = alumno.numero

            if (boletin.modalidad === 'TECNICA') {
                for (let i = 1; i <= boletin.ras; ++i) {
                    calificacion[`ra${i}`] = { acumulado: 0, total: 0 };
                }

                calificacion[`cf`] = { acumulado: 0, total: 0 };

            } else {

                calificacion['ago_sept_oct'] = 0;
                calificacion['nov_dic_ene'] = 0;
                calificacion['feb_mar'] = 0;
                calificacion['abr_may_jun'] = 0;
                calificacion['cf'] = 0;

            }


            return calificacion;
        });

        boletin.calificacion_estudiantes = calificaciones;
        boletin.estudiantes = calificaciones.length;
        return boletin;
    }

    return false;
}

export default createCalificaciones;