import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    // el input tiene un estado, ya que se necesita saber lo que escriben ahi
    // el inputValue tiene por defecto el Hola Mundo
    const [inputValue, setInputValue] = useState('');

    // Extraer el valor del input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Disparar el enter
    const handleSubmit = (e) => {
        // Prevenir el comportamiento del formulario
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
        
    }

    return (

        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
