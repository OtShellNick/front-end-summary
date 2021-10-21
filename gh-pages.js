const ghpages = require('gh-pages');
const path = require('path');

const BUILD = path.resolve(__dirname + '/web/build');
ghpages.publish(BUILD, {
    branch: 'gh-pages',
    repo: 'https://github.com/OtShellNick/front-end-summary.git'
}, (e) => console.log(e));
