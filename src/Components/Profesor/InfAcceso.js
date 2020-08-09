import React from 'react';
//import PropTypes from 'prop-types';

const InfAcceso = ({handleChange}) => {
    return (
       
        <div>
            
            <form>
                <div className="row">
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Nombres" autoComplete="off" />
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Apellidos" autoComplete="off" />
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Password" autoComplete="off" />
                    </div>
                </div>
            </form>
        </div>
    );
};

InfAcceso.propTypes = {
    
};

export default InfAcceso;