import getData from '../../../api/getData';


const getRecordsByCode = async (props) => {
    //calificacion_estudiantes:
    let res = await getData({
        url: '/calificacion',
        params: props
    });

    console.log(res);

    return res;
};

export default getRecordsByCode;
