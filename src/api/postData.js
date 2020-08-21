import URL from './url'

const postData = async (url, calificaciones) => {
	let urlAPI = URL;

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(calificaciones)
	};

	return await fetch(`${urlAPI}${url}`, requestOptions);
};

export default postData;
