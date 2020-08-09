import React from 'react';
//import PropTypes from 'prop-types';

const CodigoAutoGenerado = props => {
    return (
        <div className="form-group row mt-3">
            <label htmlFor="static" className="col-sm-4 col-form-label">
                Código auto-generado:
            </label>
            <div className="col-sm-4">
                <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="static"
                    value="MMRD000"
                />
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-block btn-outline-danger">
                <i className="fas fa-cloud-upload-alt"></i>
                </button>
            </div>
        </div>

    );
};

CodigoAutoGenerado.propTypes = {
    
};

export default CodigoAutoGenerado;