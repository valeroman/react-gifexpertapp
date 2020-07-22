import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    // Usamos el hooks de useState para añadir mas elementos
    // setCategories es lo que se utiliza para cambiar las propiedades 
    const [categories, setCategories] = useState(['One Punch']);

    // funcion solo referencia
    // const handleAdd = () => {
    //     //setCategories(['Meteoro', ...categories]);
    //     setCategories( cats => [...categories, 'Meteoro']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}

