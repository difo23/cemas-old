import getAsignaturasTecnicas from './getAsignaturasTecnicas';
import getAsignaturasAcademicas from './getAsignaturasAcademicas';


export default async function getAsignaturas(params) {

    const tecnicas = await getAsignaturasTecnicas();
    const academicas = await getAsignaturasAcademicas();

    return { tecnicas, academicas };
}


