import axios from 'axios';

export default axios.create({
	//baseURL: `http://192.168.0.22:8626/`
	baseURL: `https://cemasapi.herokuapp.com/`
});
