const postData = async (url, calificaciones) => {
	let urlAPI = 'http://localhost:8626';

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(calificaciones)
	};

	return await fetch(`${urlAPI}${url}`, requestOptions);
};

export default postData;
