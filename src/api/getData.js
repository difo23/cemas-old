import URL from './url'


const getData = async ({ url, params, id }) => {

	let urlAPI = URL;
	let string_params = '';

	if (params.length === 1) {

		for (let param of params) {

			string_params += `/${param.key}/${param.value}`;

		}

	} else {
		string_params += `/${id}`;
	}

	const urlComplete = `${urlAPI}${url}${encodeURI(string_params)}`;
	console.log('Final URL', urlComplete);
	const resp = await fetch(urlComplete);
	const { data } = await resp.json();

	console.log(data);

	return data;
};

export default getData;
