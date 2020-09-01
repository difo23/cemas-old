import React from 'react';
import ItemCurso from './ItemCurso';


const ListCurso = ({ cursos }) => {


    const renderCursos = cursos.map((curso) => {
        return <ItemCurso key={curso._id} curso={curso} />
    });



    return (
        <div>
            <h1>Lista de cursos:</h1>
            <hr />
            {renderCursos}
        </div>
    );
};

export default ListCurso;