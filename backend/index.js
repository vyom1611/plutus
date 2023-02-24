const axios = require("axios");
require('dotenv').config();

const rapid_key = process.env.RAPID_API_KEY;


const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol: 'MSFT',
        outputsize: 'compact',
        datatype: 'json'
    },
    headers: {
        'X-RapidAPI-Key': rapid_key,
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});


