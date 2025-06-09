const json = require('./json/url-shortening.json');

function minify(json, entry) {
    json.forEach(data => {
        const originalUrl = data.original_url;
        const redirectUrl = data.short_url;
        if (originalUrl === entry) {
            console.log('redirecting: ', redirectUrl);
        }
    });

}
const url = 'https://www.example.com/articles/how-to-grow-tomatoes-in-winter';
minify(json, url);
