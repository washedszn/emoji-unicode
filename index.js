const scrape = require('./scripts/scrape');
const format = require('./scripts/format');

const run = async () => {
    let unicodes = await scrape();
    let formatted = format(unicodes);

    console.log(formatted)
}

run()