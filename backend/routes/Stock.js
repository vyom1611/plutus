const router = require("express").Router();

const axios = require("axios");
const {response} = require("express");

const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
        interval: '5min',
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'MSFT',
        datatype: 'json',
        output_size: 'compact'
    },
    headers: {
        'X-RapidAPI-Key': '4d0ac62440msh7e10cdc1894d21ap14914bjsn3cfd4eb97433',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
};


router.get("/", async (req, res) => {
    try {
        const pins = (await axios.request(options)).request.data;
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
