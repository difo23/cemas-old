import * as Yup from 'yup';

const registerSchemaFormik = Yup.object().shape({
    username: Yup.string().email().required('Email is required'),
    codigoCentro: Yup.string().email().required('Email Centro is required'),
    firstName: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Lastname is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Password confirm is required')
});

export default registerSchemaFormik;
