import * as Yup from 'yup';

const loginSchemaFormik = Yup.object().shape({
	username: Yup.string().email().required('Email is required'),
	password: Yup.string().required('Password is required')
});

export default loginSchemaFormik;
