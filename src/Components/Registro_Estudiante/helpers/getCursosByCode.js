import getData from '../../../api/getData';


const getCursosByCode = async (props) => {
    //calificacion_estudiantes:
    let res = await getData({
        url: '/curso',
        params: props
    });

    console.log(res);

    return res;
};

export default getCursosByCode;
