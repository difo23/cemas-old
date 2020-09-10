import getData from '../../api/getData';


export default async function getAsignaturasAcademicas() {

    const asignaturas = await getData({
        url: '/asignaturas_academicas',
        params: [],
        id: null
    })


    const options = asignaturas.map(asignatura => {

        return {
            name: 'asignatura',
            value: asignatura.codigo,
            label: `${asignatura.nombre} ${asignatura.codigo}`
        }
    })



    return options;

}