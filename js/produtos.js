'use strict';

const url = 'http://10.107.134.2:8080/produtos';

const getProdutos = async () => {
    // fetch é responsável por fazer as requisições no JS
    const response = await fetch(url);
    return response.json();
};

const postProduto = (produto) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'content-type': 'application/json',
        },
    };

    fetch(url, options);
};

const deleteProduto = (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(`${url}/${id}`, options);
};

export { getProdutos, postProduto, deleteProduto };
