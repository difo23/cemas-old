import React from 'react';
import ItemEstudiante from './ItemEstudiante'

const ListEstudiantes = ({ estudiantes }) => {


    const rendeEstudiantes = estudiantes.map((estudiante) => {
        return <ItemEstudiante estudiante={estudiante} />
    })

    return (
        <div>
            <h1>Lista de Estudiantes</h1>
            <hr />
            {rendeEstudiantes}
        </div>
    );
};

export default ListEstudiantes;