import axios from 'axios';

export default axios.create({
	baseURL: `http://192.168.0.119:8626/`
	//baseURL: `http://localhost:8626/`
});
