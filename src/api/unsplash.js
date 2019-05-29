import axios from 'axios';

export default axios.create({
    
    baseURL: 'https://api.unsplash.com',

    // docs: https://unsplash.com/documentation
    headers: {
        // Chave de autorização
        Authorization: 'Client-ID 8a36e3f78196ba7dbe3dd40ac18cc677249845001c5ebb7c9ea0edb8cf77edf0'
    }
});