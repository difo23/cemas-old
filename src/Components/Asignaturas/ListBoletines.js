import React from 'react';

import ItemBoletin from "./ItemBoletin";

const ListBoletines = ({ boletines }) => {
    return (
        <div className='container'>

            {boletines.map(boletin => {

                return <ItemBoletin key={boletin.code} boletin={boletin} />
            })}

        </div>
    );
};

ListBoletines.propTypes = {

};

export default ListBoletines;