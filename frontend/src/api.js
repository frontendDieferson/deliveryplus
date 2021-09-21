let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async() => {
        // GET / categories
        const rest = await fetch(BASE+'/categories');
        const json = await rest.json();
        return json;


    },
    getProducts: async (category, page, search) => {
        //GET /products ([search, page, category])
        let fields = {};
        if(category!== 0) {
            fields.category = category;
        }
        if(page > 0) {
            fields.page = page;
        }
        if(search!=='') {
            fields.search = search;
        }


        let queryString = new URLSearchParams(fields).toString();

        const rest = await fetch(BASE+'/products?'+ queryString);
        const json = await rest.json();
        return json;

    },
}