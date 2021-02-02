const Stats = require('./stats');
const images = require('./images');
const Comments = require('./comments');
const comments = require('./comments');

module.exports = function(viewModel){
    images.popular();
    Stats();
    comments.newest();
}