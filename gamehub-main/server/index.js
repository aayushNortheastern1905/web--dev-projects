const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Set the base URL for all requests
const baseURL = process.env.BASE_URL;

// Middleware to parse JSON request body
app.use(express.json());
// Use the cors middleware
// Configure CORS to only allow requests from a specific origin
// const corsOptions = {
//     origin: 'https://game-hub-taupe-phi.vercel.app/',
//   };
//   app.use(cors(corsOptions));
app.use(cors());

app.get('/platforms/lists/parents', async (req, res) => {
    const apiKey = process.env.API_KEY;
    const { apikey, ...queryParams } = req.query;
    try {
        const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');
        console.log(`FETCH URL:${baseURL}/platforms/lists/parents?key=${apiKey}&${queryString}`);
        const response = await axios.get(`${baseURL}/platforms/lists/parents?key=${apiKey}&${queryString}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});


app.get('/:query*', async (req, res) => {
    const { query } = req.params;
    console.log("query:",query)
    const { apikey, ...queryParams} = req.query;
    const apiKey = process.env.API_KEY;
    try {
        // const platformres = await axios.get(`${baseURL}/platforms/lists/parents?key=${apiKey}`);
        // console.log(platformres.data.results);
        const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');
        // console.log(`FETCH URL:${baseURL}/${query}?key=${apiKey}&${queryString}`)
        // console.log("queryParams:",queryParams)
        const response = await axios.get(`${baseURL}/${query}?key=${apiKey}&${queryString}`);
        // console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
