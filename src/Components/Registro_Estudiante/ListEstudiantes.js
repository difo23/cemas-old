import React, { useEffect, useState } from 'react';
import ItemEstudiante from './ItemEstudiante'
import updateData from '../../api/updateData';


const ListEstudiantes = ({ location, history }) => {

    const [state, setstate] = useState({

        curso: { estudiantes_inscritos: [] }
    })

    useEffect(() => {
        console.log(location)

        if (!!location.state && !!location.state.curso) {

            console.log(location.state.curso)

            setstate({

                curso: location.state.curso
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

        setstate({ curso: { ...state.curso, estudiantes_inscritos } })

    }


    const handleSend = () => {

        if (window.confirm('Desea Guardar la tabla de calificacion ?')

        ) {
            updateData('/curso', state.curso._id, state.curso)
                .then((res) =>
                    setstate({
                        ...state,
                        error: false,
                        success: true
                    })
                )
                .catch((e) =>
                    setstate({
                        ...state,
                        success: false,
                        error: true
                    })
                );
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