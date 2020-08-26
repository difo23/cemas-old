import React, { useState } from 'react';

const ItemRA = (props) => {

	const [state, setstate] = useState({

		numero: props.numero,
		ra_number: props.ra,
		acumulado: props.acumulado,
		total: props.total
	})





	const onchange = ({ target }) => {

		const { name, value } = target;


		props.onChangeRA(
			{
				...state,
				[name]: value
			}
		);


		setstate({
			...state,
			[name]: value

		});



	}





	return (
		<div className="mt-3 mb-3">

			<div className="row">
				<div className="col-sm-2">
					<i className="fas fa-registered" />
					<strong> {props.ra}</strong>
				</div>
				<div className="col">
					<input type="text" onChange={onchange} name="acumulado" value={state.acumulado} className="form-control" placeholder="Acumulado" autoComplete="off" />
				</div>
				<div className="col">
					<input type="text" onChange={onchange} name="total" value={state.total} className="form-control" placeholder="Total" autoComplete="off" />
				</div>

			</div>
		</div>
	);
};

export default ItemRA;
