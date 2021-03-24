const superagent = require('superangent');
const cheerio = require('cheerio');

export const scrape = () => {

    superagent
        .get('https://emojipedia.org/emoji/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}