import URL from './url'

const postData = async (url, data) => {
	let urlAPI = URL;

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	};

	return await fetch(`${urlAPI}${url}`, requestOptions);
};

export default postData;
