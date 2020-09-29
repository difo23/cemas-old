import React, { useState } from 'react';
import { Formik } from 'formik';
import registerSchemaFormik from './registerSchemaFormik';
import RegisterFormFormik from './RegisterFormFormik';
import postData from '../../api/postData';

const Register = props => {

    const [register, setregister] = useState(false);



    const initialValues = {
        username: '',
        password: '',
        passwordConfirm: '',
        codigoCentro: '',
        lastName: '',
        firstName: ''
    };


    const onSubmitFormik = ({ username, password, lastName, firstName, codigoCentro }, { setStatus, setSubmitting }) => {
        setStatus();
        setregister(true)

        console.log(username, password, lastName, firstName, codigoCentro)
        postData('/register', { username, password, lastName, firstName, codigoCentro })
            .then((data) => {

                setregister(false)
                switch (data.status) {

                    case 201:
                        setStatus('Su usuario ha sido creado con exito! Regresar a login.');
                        break;
                    default:
                        setStatus('Error: Email repetido!');
                        break;


                }

                setSubmitting(true);

            }).catch((error) => {
                console.log(error);
                setSubmitting(false);
                setStatus('Error: Fallo con el Internet!');
                setregister(false)
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
                    {
                        register && <div className="spinner-grow text-success ml-3" role="status">
                            <span className="sr-only">Saving...</span>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};



export default Register;