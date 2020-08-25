import React, { useState } from 'react';

import ItemRA from './ItemRA';

const ListRA = (props) => {

	const [state, setstate] = useState(
		{

			estudiante: props.estudiante
		})


	const onChangeRA = (item) => {


		const newState = {
			estudiante: {
				...state.estudiante,
				[item.ra_number]: {
					acumulado: item.acumulado,
					total: item.total
				}
			}
		}


		setstate(newState);
	}


	const add = (e) => {
		e.preventDefault();

		let total = 0;
		let acumulado = 0;
		for (let key in state.estudiante) {
			if (key !== 'numero' && key !== 'cf') {

				acumulado += state.estudiante[key].acumulado * 1;
				total += state.estudiante[key].total * 1;
			}


		}

		const newState = {
			estudiante: {
				...state.estudiante,
				['cf']: {
					acumulado,
					total
				}
			}
		}


		setstate(newState);


		console.log('Add : ', newState)
	}

	return (
		<div className="row mt-3 mb-3">
			<div className="col-sm-3 ml-3">
				<div className="mt-3">
					<h2>
						<span
							style={{
								fontSize: '100px',
								color: 'Dodgerblue'
							}}
						>
							<i className="fas fa-user-graduate" />
						</span>
						<strong> {`#${props.estudiante.numero}`}</strong>
					</h2>
				</div>

				<div className="mt-3">
					<h2>
						{' '}
						<strong> {` Calificación:`}</strong>{' '}
					</h2>
					<h2> {`${state.estudiante.cf.acumulado}/${state.estudiante.cf.total}`}</h2>
				</div>

				<div className="row">
					<div className="col mb-3">
						<button type="button" onClick={add} className="btn btn-block btn-outline-primary">
							<i className="fas fa-plus" /> SUMAR
						</button>
					</div>


				</div>
			</div>

			<div className="col mt-3">


				<div className="row">
					<div className="col-sm-2">
						{/* <i className="fas fa-registered" /> */}
						<strong> RAs:</strong>
					</div>
					<div className="col">
						<strong> Acumulado:</strong>
					</div>
					<div className="col">
						<strong> Total:</strong>

					</div>

				</div>

				{


					Object.values(props.estudiante).map((ra, i) => {
						let keys = Object.keys(props.estudiante);

						if (keys[i] !== 'numero' && keys[i] !== 'cf') {

							return <ItemRA

								key={`item-${i}-${props.estudiante.numero}`}
								onChangeRA={onChangeRA}
								numero={props.estudiante.numero}
								ra={keys[i]}
								acumulado={ra.acumulado}
								total={ra.total}

							/>
						}


					})
				}


			</div>
		</div>
	);
};

export default ListRA;
