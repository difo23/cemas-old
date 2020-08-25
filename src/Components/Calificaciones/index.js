import React, { useState, useEffect } from 'react';
import TablaAcademica from './Academicas/TablaAcademica';
import TablaTecnica from './Tecnicas/TablaTecnica';

const Calificaciones = ({ location, history }) => {

	const [state, setstate] = useState({

		fromDashboard: false,
		boletin: {}
	})


	useEffect(() => {

		console.log('Propiedad location', location)

		if (!!location.state) {
			console.log('Propiedad location', location)
			setstate({
				fromDashboard: location.state.fromDashboard,
				boletin: location.state.boletin
			})
		} else {

			history.push({ pathname: '/asignaturas' });
		}



	}, [location])

	return (
		<div className="container  mt-3">
			<div className=" row form-inline  my-lg-0">
				<h1 className="display-5">Calificaciones</h1>
			</div>
			<hr style={{ border: '1px solid green' }} />
			{

				(Object.keys(state.boletin).length) ?
					(state.fromDashboard ?
						<TablaTecnica boletin={state.boletin} /> :
						<TablaAcademica boletin={state.boletin} />)
					: ''


			}
		</div>
	);
};

export default Calificaciones;
