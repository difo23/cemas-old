import React from 'react';
import { Link } from 'react-router-dom';

const ListCurso = ({ cursos, handleDelete }) => {


    const renderCursos = cursos.map((curso) => {

        return (
            <div key={curso._id} className="card border-dark mb-3 mt-3 ml-3 mr-3" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Curso</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{`${curso.codigo_curso}`}</h6>
                    <p className="card-text"> Periodo Educativo: {curso.codigo_periodo}</p>
                    <button className="btn mr-1 btn-outline-danger " onClick={() => handleDelete(curso._id, curso.codigo_calificaciones)}>
                        <i className=" fas fa-trash-alt" />
                    </button>

                    <Link
                        className="btn  ml-1 btn-outline-success"
                        to={{
                            pathname: '/estudiantes',
                            search: 'search',
                            hash: 'hash',
                            state: { curso: curso }
                        }}
                    >
                        Inscribir{' '}
                    </Link>



                </div>
            </div>
        );

        //return <ItemCurso key={curso._id} curso={curso} handleDelete={handleDelete} />
    });



    return (
        <div className='row'>
            {renderCursos}
        </div>
    );
};

export default ListCurso;