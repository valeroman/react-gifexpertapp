import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

// Custom Hooks
export const useFetchGifs = (category) => {

    const [state, setState] = useState({

        data: [],
        loading: true
    });

    // El hooks useEffect permite ejecutar cierto codigo de manera condicional. 
    // cuando cambie la categoria
    useEffect(() => {

        // Realiza la peticion http
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [category])

    return state; // { data:[], loading: true };
}