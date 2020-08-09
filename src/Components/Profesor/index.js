import React from 'react';


import InfCentro from './InfCentro';
import InfAcceso from './InfAcceso';
import CodigoAutoGenerado from './CodigoAutoGenerado';


const Profesor = () => {
	

	


	return (
		<div className="container  mt-3">
			
			<h1 className="display-5">Profesor</h1>
			
			<hr style={{ border: '1px solid green' }} />
			
			
				<div className="acceso">
					<h3 className="diplay-4 mb-3"> Información de Acceso:</h3>
					<InfAcceso />
				    <InfCentro />
					<CodigoAutoGenerado/>					
				</div>

		



			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

export default Profesor;
