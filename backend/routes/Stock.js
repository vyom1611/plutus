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
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
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
