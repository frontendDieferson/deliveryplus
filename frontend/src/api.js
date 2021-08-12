let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async() => {
        // GET / categories
        const rest = await fetch(BASE+'/categories');
        const json = await rest.json();
        return json;


    },
    getProducts: async () => {
        //GET /products ([search, page, category])
        const rest = await fetch(BASE+'/products');
        const json = await rest.json();
        return json;

    },
}