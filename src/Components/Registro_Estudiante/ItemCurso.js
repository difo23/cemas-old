import React from 'react';
import { Link } from 'react-router-dom';


const ItemCurso = ({ curso }) => {
    return (

        <div key={curso._id}>
            <div className="row mt-3">
                <div className="col-sm-6 mt-4">
                    <span> {`${curso.codigo_calificaciones}`}</span>
                </div>

                <div className="col-sm-3 mt-3 ">
                    <button className="btn btn-block btn-outline-danger " onClick={() => handleDelete(curso._id, curso.codigo_calificaciones)}>
                        <i className=" fas fa-trash-alt" />
                    </button>
                </div>

                <div className="col-sm-3 mt-3 ">


                    <Link
                        className="btn btn-block btn-outline-success"
                        to={{
                            pathname: '/estudiantes',
                            search: 'search',
                            hash: 'hash',
                            state: { estudiantes: curso.estudiantes_inscritos.length, curso: curso }
                        }}
                    >
                        Inscribir{' '}
                    </Link>
                </div>
            </div>
            <hr style={{ border: '1px solid gray' }} />
        </div>



    );
};

export default ItemCurso;