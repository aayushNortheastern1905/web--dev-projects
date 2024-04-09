import axios from 'axios';

export default axios.create({
    // baseURL: "https://api.rawg.io/api",
    // baseURL: "http://localhost:3001",
    baseURL: "https://gamehub-server.vercel.app",
    params:{
        // key: import.meta.env.VITE_RAWG_API_KEY
        // key: "fc4a1db4b8d04fcab83b402ecf6d9239"
    }
}); 