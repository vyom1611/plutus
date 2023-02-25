const router = require("express").Router();
const dotenv = require("dotenv");

const axios = require("axios");
const {response} = require("express");

dotenv.config();

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

router.get("/:icon", async (req, res) => {
    options.params.symbol = req.params.icon;
    console.log(req.params.icon);
    axios.request(options).then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

module.exports = router;
