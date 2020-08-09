import React from 'react';

import  ItemBoletin from "./ItemBoletin";

const ListBoletines = props => {
    return (
        <div className= 'container'>
            <ItemBoletin/>
            <ItemBoletin/>
            <ItemBoletin/>
            <ItemBoletin/>
            <ItemBoletin/>
        </div>
    );
};

ListBoletines.propTypes = {
    
};

export default ListBoletines;