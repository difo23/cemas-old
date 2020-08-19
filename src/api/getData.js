const getData = async ({ url, params }) => {
	let urlAPI = 'http://localhost:8626';

	const urlComplete = `${urlAPI}${url}?&curso=${params.curso}&periodo=${params.periodo}&asignatura=${params.asignatura}`;

	const resp = await fetch(urlComplete);
	const { data } = await resp.json();

	console.log(data);

	return data;
};

export default getData;
