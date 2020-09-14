import React, { useEffect, useState } from 'react';
import ItemEstudiante from './ItemEstudiante'
import updateData from '../../api/updateData';
import Alert from '../helpers/Alert';

const ListEstudiantes = ({ location, history }) => {

    const [state, setstate] = useState({

        curso: { estudiantes_inscritos: [] },
        error: false,
        success: false
    })

    useEffect(() => {


        if (!!location.state && !!location.state.curso) {



            setstate(state => {
                return ({
                    ...state,
                    curso: location.state.curso
                })
            })
        } else {

            history.push({ pathname: '/registro' });
        }



    }, [location, history])






    const handleChange = (estudiante) => {

        const estudiantes_inscritos = state.curso.estudiantes_inscritos.map((est) => {

            if (est.numero === estudiante.numero) {
                return estudiante
            }

            return est;
        })

        setstate({ ...state, curso: { ...state.curso, estudiantes_inscritos } })

    }


    const handleSend = () => {



        if (window.confirm('Desea Guardar el curso?')

        ) {

            updateData('/curso', state.curso._id, state.curso)
                .then((res) => setstate({
                    ...state,
                    success: true,
                    error: false
                }))
                .catch((error) => setstate({
                    ...state,
                    success: false,
                    error: true
                }));
        } else {
            setstate({
                ...state,
                success: false,
                error: true
            });
        }
    };



    const rendeEstudiantes = state.curso.estudiantes_inscritos.map((estudiante) => {
        return <ItemEstudiante key={estudiante.numero} estudiante={estudiante} handleChange={handleChange} />
    })

    return (
        <div className="container  mt-3" >
            <h5>Lista de Estudiantes</h5>
            {state.success && <Alert message={'Todo salió bien! Y yo me alegro.'} type={'success'} />}
            {state.error && <Alert message={'Revisa tu conexión o la información que envias!'} type={'danger'} />}
            <hr style={{ border: '1px solid green' }} />
            {rendeEstudiantes}

            <hr style={{ border: '1px solid green' }} />

            <div className="col-sm-12 mt-3">
                <button alt="Guardar" onClick={handleSend} className="btn btn-block btn-outline-danger ml-1">
                    <i className="fas fa-cloud-upload-alt" />
                </button>
            </div>
            <hr style={{ border: '1px solid green' }} />
        </div>
    );
};

export default ListEstudiantes;