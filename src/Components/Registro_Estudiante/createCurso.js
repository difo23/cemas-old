import createEstudiantes from './createEstudiantes';
import postData from '../../api/postData';

async function createCurso(params) {

    const grado = params.grado.value;
    const seccion = params.seccion.value;
    const periodo = params.periodo.value;
    const estudiantes = params.estudiantes;
    const { user } = params;

    const curso = {
        codigo_centro: user.codigoCentro,
        codigo_periodo: periodo,
        codigo_curso: `${grado}${seccion}`,
        codigo_calificaciones: `${grado}${seccion}:${periodo}`,
        codigo_titular: user.username,
        nombres_titular: `${user.firstName} ${user.lastName}`,
        estudiantes_inscritos: createEstudiantes(estudiantes),
        estado: true
    }



    // save in bd
    // obtener _id desde la bd

    let data = await postData('/curso/create', curso);


    return data;



}


export default createCurso;