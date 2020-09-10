import getData from '../../api/getData';


export default async function getAsignaturasTecnicas(params) {

    const asignaturas = await getData({
        url: '/asignaturas_tecnicas',
        params: [],
        id: null
    })


    const options = asignaturas.map(asignatura => {

        return {
            name: 'asignatura',
            value: asignatura.codigo,
            label: asignatura.nombre
        }
    })
    
    return options;

}