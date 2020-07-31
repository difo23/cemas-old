

const getPeriodos = () => {

    let periodos = [];

	const fecha = new Date();
	for (let i = 1; i > -3; --i) {
		periodos.push(`${fecha.getFullYear() + i}-${fecha.getFullYear() + i + 1}`);
	}
    
    return periodos;
};

export default getPeriodos;