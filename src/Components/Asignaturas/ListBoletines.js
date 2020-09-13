import React from 'react';
import { Link } from 'react-router-dom';

import ItemBoletin from "./ItemBoletin";

const ListBoletines = ({ boletines, handleDelete }) => {

    console.log(boletines)

    const renderBoletines = boletines.map((boletin) => {
        return (
            <div key={boletin._id} className="card border-dark mb-3 mt-3 ml-3 mr-3" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Asigantura</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{`${boletin.codigo_asignatura}`}</h6>
                    <p className="card-text"> <strong>{boletin.codigo_curso}</strong></p>
                    <p className="card-text"> Periodo Educativo: {boletin.codigo_periodo}</p>
                    <p className="card-text"> Estudiantes inscritos: {boletin.estudiantes}</p>
                    <p className="card-text"> Modalidad: {boletin.modalidad}</p>
                    <button className="btn mr-1 btn-outline-danger " onClick={() => handleDelete(boletin._id, boletin.codigo_calificaciones)}>
                        <i className=" fas fa-trash-alt" />
                    </button>

                    <Link
                        className="btn  ml-1 btn-outline-success"
                        to={{
                            pathname: '/calificaciones',
                            search: 'search',
                            hash: 'hash',
                            state: { fromDashboard: (boletin.modalidad === 'TECNICA' ? true : false), boletin: boletin }
                        }}
                    >
                        Calificar{' '}
                    </Link>

                </div>
            </div>
        );
    });



    return (
        <div className='row'>

            {renderBoletines}

        </div>
    );
};

ListBoletines.propTypes = {

};

export default ListBoletines;