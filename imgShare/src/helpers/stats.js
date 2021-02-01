const {Image,Comment} = require('../models');
async function imageCounter(){
    return await Image.countDocuments();
}
async function commentsCounter(){
   return await Comment.countDocuments();
}
async function imageTotalViewsCounter(){
    const result = await Image.aggregate([{$group: {
        _id: '1',
        viewsTotal: {$sum: '$views'}
    }}]);
    return result[0].viewsTotal;
}

async function likesTotalCounter(){

}

module.exports = () => {

}