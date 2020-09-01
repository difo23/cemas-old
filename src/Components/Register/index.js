import React from 'react';
import { Formik } from 'formik';
import registerSchemaFormik from './registerSchemaFormik';
import RegisterFormFormik from './RegisterFormFormik';
const Register = props => {

    const initialValues = {
        username: '',
        password: '',
        passwordConfirm: ''
    };


    const onSubmitFormik = ({ username, password }, { setStatus, setSubmitting }) => {
        setStatus();

    };



    return (
        <div className=" ml-auto mr-auto mt-5" style={{ width: '50%' }}>
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