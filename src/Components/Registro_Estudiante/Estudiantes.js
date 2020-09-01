import React from 'react';
import ListEstudiantes from './ListEstudiantes'



const Estudiantes = ({ estudiantes }) => {
    return (
        <div>
            <ListEstudiantes estudiantes={estudiantes} />
        </div>
    );
};

export default Estudiantes;