const createCodeBoletin = ({ periodo, asignatura, modalidad, grado, seccion, ra, estudiante, user, centro = { codigo: 'CEMAS' } }) => {
    let code = ''


    if (!!asignatura && !!periodo && !!grado && !!seccion && !!estudiante) {

        code = {
            codigo_calificacion: `${centro.codigo}:${modalidad.value}:${grado.value}${seccion.value}:${asignatura.value}:${user.username}:${periodo.value}:${estudiante.value}:${ra.value}`,
            calificacion_estudiantes: [],
            codigo_asignatura: asignatura.value,
            codigo_centro: centro.codigo,
            codigo_curso: `${grado.value}${seccion.value}`,
            codigo_maestro: user.username,
            codigo_periodo: periodo.value,
            estado: true,
            estudiantes: estudiante.value,
            ras: ra.value,
            modalidad: modalidad.value
        };

        return code;
    }

    return { codigo_calificacion: '' };


}


export default createCodeBoletin;