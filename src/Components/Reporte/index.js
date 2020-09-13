import React, { useState, useEffect } from 'react'
import { getUser } from '../helpers/getUser';
import Alert from '../helpers/Alert';
import getCursosByCode from '../helpers/getCursosByCode';


function Reporte(props) {

    const initialState = {
        cursos: [],
        user: getUser(),
        error: false,
        success: false,
        message: '',

    };


    const [state, setstate] = useState(initialState)



    useEffect(() => {

        //cargar lista de cursos creados por el usuario
        console.log('Cargar todos los cursos creados por el usuario');

        getCursosByCode([{
            key: 'codigo_titular',
            value: state.user.username
        }]).then(data => setstate({
            ...state,
            error: false,
            success: true,
            message: `${data.length} Curso${data.length < 2 ? '' : 's'} obtenido${data.length < 2 ? '' : 's'} de  BD.`,
            cursos: data
        })).catch((err) => setstate({
            ...state,
            cursos: [],
            message: 'Revisar el internet!',
            error: true,
            success: false,
        }))

    }, [])


    const hadledUpdate = (event) => {

        console.log('UPDATE REPORTES')
    }

    const hadledPDF = (event) => {

        console.log('GET PDF')
    }


    const renderCursos = state.cursos.map((curso) => {
        return (
            <div key={curso._id} className="card border-dark mb-3 mt-3 ml-3 mr-3" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Reporte</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> {`${curso.codigo_curso}`}</h6>
                    <p className="card-text"> Periodo Educativo: {curso.codigo_periodo}</p>
                    <button
                        onClick={hadledUpdate}
                        className="btn btn-outline-danger mr-1"
                    >Actualizar</button>
                    <button
                        onClick={hadledPDF}
                        className="btn btn-outline-success ml-1"
                    >PDF</button>
                </div>
            </div>
        );
    });


    return (
        <div className="container mt-3 mb-5" >

            <h5>Reportes:</h5>
            <hr style={{ border: '1px solid green' }} />
            {state.error && <Alert message={`${state.message}`} type={'danger'} />}
            {state.success && <Alert message={`${state.message}`} type={'success'} />}
            <div className="row">

                {renderCursos}
            </div>

        </div>
    )
}

export default Reporte;
