const {Image} = require('../models/');


modules.exports = {
    async popular(){
        const images = await Image.find()
            .limit(9)
            .sort({likes: -1});
        return images;
    }
}