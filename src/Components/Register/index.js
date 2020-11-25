import React from 'react';
import { Formik } from 'formik';
import registerSchemaFormik from './registerSchemaFormik';
import RegisterFormFormik from './RegisterFormFormik';
import postData from '../../api/postData';

const Register = props => {


    const initialValues = {
        username: '',
        password: '',
        passwordConfirm: '',
        codigoCentro: '',
        lastName: '',
        firstName: ''
    };


    const onSubmitFormik = ({ username, password, lastName, firstName, codigoCentro }, { setStatus, setSubmitting }) => {
        setStatus({
            register: true,
            message: null,
            error: false,

        });


        console.log(username, password, lastName, firstName, codigoCentro)
        postData('/register', { username, password, lastName, firstName, codigoCentro })
            .then((data) => {


                switch (data.status) {

                    case 201:

                        setStatus({
                            register: false,
                            message: 'Su usuario ha sido creado con exito! Regresar a login.',
                            error: false,

                        });
                        break;
                    default:
                        setStatus({
                            register: false,
                            message: 'Error: Email repetido!',
                            error: true,

                        });

                        break;


                }

                setSubmitting(true);

            }).catch((error) => {
                console.log(error);
                setSubmitting(false);
                setStatus({
                    register: false,
                    message: 'Error: Fallo con el Internet!',
                    error: true,

                });

            })

    };



    return (
        <div className=" ml-auto mr-auto mt-5 mb-5" style={{ width: '50%' }}>
            <div className="card text-white bg-dark">
                <div className="card-header">REGISTRO ESCUELA</div>

                <div className="card-body">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerSchemaFormik}
                        onSubmit={onSubmitFormik}
                    >
                        {RegisterFormFormik}
                    </Formik>

                </div>

            </div>
        </div>
    );
};



export default Register;