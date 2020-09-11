import React from 'react';
import ItemCurso from './ItemCurso';


const ListCurso = ({ cursos, handleDelete }) => {


    const renderCursos = cursos.map((curso) => {
        return <ItemCurso key={curso._id} curso={curso} handleDelete={handleDelete} />
    });



    return (
        <div>
            
            <hr />
            {renderCursos}
        </div>
    );
};

export default ListCurso;