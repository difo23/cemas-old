import URL from './url'

const updateData = async (url, id, boletin) => {
    let urlAPI = URL;

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(boletin)
    };

    return await fetch(`${urlAPI}${url}/${id}`, requestOptions);
};

export default updateData;