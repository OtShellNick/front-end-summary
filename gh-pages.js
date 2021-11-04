const ghpages = require('gh-pages');
const path = require('path');

const BUILD = path.resolve(__dirname + '/build');
ghpages.publish(BUILD, {
    branch: 'gh-pages',
    repo: 'https://git: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@github.com/OtShellNick/front-end-summary.git'
}, (e) => console.log(e));
