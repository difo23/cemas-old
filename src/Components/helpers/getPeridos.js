

const getPeriodos = () => {

	let periodos = [];

	const fecha = new Date();
	let temp = '';
	for (let i = 1; i > -3; --i) {
		temp = `${fecha.getFullYear() + i}-${fecha.getFullYear() + i + 1}`;
		periodos.push({
			name: 'periodo',
			value: temp,
			label: temp
		});
	}

	return periodos;
};

export default getPeriodos;