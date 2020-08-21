import React from 'react';

import ItemBoletin from "./ItemBoletin";

const ListBoletines = ({ boletines }) => {

    console.log(boletines)
    return (
        <div className='container'>

            {boletines.map(boletin => {

                return <ItemBoletin key={boletin._id} boletin={boletin} />
            })}

        </div>
    );
};

ListBoletines.propTypes = {

};

export default ListBoletines;