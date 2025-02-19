import axios from "axios";

const api = axios.create({

    baseURL: " https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'c6d3337355msh42fa60353c28f6cp1df951jsna5a1938d4854',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
    },
});

export default api;