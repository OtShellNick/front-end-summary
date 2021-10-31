const ghpages = require('gh-pages');
const path = require('path');

const BUILD = path.resolve(__dirname + '/build');
ghpages.publish(BUILD, {
    branch: 'gh-pages',
    repo: 'https://git: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@github.com/OtShellNick/front-end-summary.git'
}, (e) => console.log(e));
