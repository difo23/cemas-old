import URL from './url'

const postData = async (url, id) => {
	let urlAPI = URL;

	const requestOptions = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	};

	return await fetch(`${urlAPI}${url}/${encodeURI(id)}`, requestOptions);
};

export default postData;
