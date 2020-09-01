import * as Yup from 'yup';

const registerSchemaFormik = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Password confirm is required')
});

export default registerSchemaFormik;
