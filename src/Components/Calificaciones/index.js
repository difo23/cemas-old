import React from 'react';
import TablaAcademica from './Academicas/TablaAcademica';
import TablaTecnica from './Tecnicas/TablaTecnica';

const Calificaciones = ({ location }) => {
	return (
		<div className="container  mt-3">
			<div className=" row form-inline  my-lg-0">
				<h1 className="display-5">Calificaciones</h1>
			</div>
			<hr style={{ border: '1px solid green' }} />
			{location.state.fromDashboard ? <TablaTecnica /> : <TablaAcademica />}
		</div>
	);
};

export default Calificaciones;
