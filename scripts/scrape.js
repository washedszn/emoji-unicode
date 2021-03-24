const superagent = require('superagent');
const cheerio = require('cheerio');

const scrape = async () => {

    return await superagent
        .get('https://emojipedia.org/emoji/')
        .then(res => {
            let $ = cheerio.load(res.text);
            let unicodes = [];

            $('td:nth-child(2)').each((i, e) => {
                unicodes[i] = $(e).text()
            })

            return unicodes;
        })
        .catch(err => {
            console.log(err)
            return [];
        })
}

module.exports = scrape;