
// Peticion para traer las imagenes que corresponde a la categoria
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=KPFKyqKajVWPBeRpbGhAVGCnBvUGYUt2`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    // Extraer informacion necesaria
    // recorer cada una de las imagenes y extraer lo que necesitamos
    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}