import React from 'react';
//import PropTypes from 'prop-types';
import Selector from '../helpers/Selector';

const InfCentro = props => {
    return (
        
        <div className="informacion_centro">
			<h5 className="diplay-4 mb-3 mt-3"> Información de Centro:</h5>

			<form>
				<div className="row mt-1 mb-1">
					<div className='col-sm-6'>
						<Selector title={'Nombre completo del centro'} />

                    </div>
                    <div className='col-sm-6'>
                        <Selector title={'Siglas oficiales del centro'}/>

                    </div>
					
				</div>
			</form>
		</div>
        
    );
};

InfCentro.propTypes = {
    
};

export default InfCentro;