const request = require('request')
require('./Database/DB')
const Data = require('./data')
const url = 'https://api.wazirx.com/api/v2/tickers'
request ( { url : url, json: true}, (error, response) =>
    {
        if (error) {
        console.log('not able to connect')
        }

        else if (response.body === 0) {
            console.log('No data Found')
        }
        else {
            const info= response.body
            const arr = [];
            for (var key in info) {
              const { name, last, buy, sell, volume, base_unit } = info[key];
              arr.push({ name, last, buy, sell, volume, base_unit });
              if (arr.length === 10) break;
            }
            for (let i = 0; i < arr.length; i++) {
                let data = new Data(arr[i]);
                data.save();
              }
        }
    })