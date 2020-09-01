import createEstudiantes from './createEstudiantes';

function createCurso(params) {

    const { grado } = params.grado.value;
    const { seccion } = params.seccion.value;
    const { periodo } = params.periodo.value;
    const { estudiantes } = params.estudiantes;
    const { user } = params.user;

    const curso = {
        codigo_periodo: periodo,
        codigo_curso: `${grado}${seccion}`,
        codigo_calificacion: `${grado}${seccion}:${periodo}:${estudiantes}`,
        titular_correo: user.username,
        titular_nombre: `${user.firstName} ${user.lastName}`,
        estudiantes_inscritos: createEstudiantes(estudiantes)
    }


    // save in bd

    // obtener _id desde la bd

    return curso;



}


export default createCurso;