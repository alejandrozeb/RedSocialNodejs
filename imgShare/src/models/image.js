const mongoose = require("mongoose");
const {Schema} = mongoose;
const path = require("path");
const ImageSchema = new Schema({
    title: {type: String},
    description:{type:String},
    filename: {type: String},
    views: {type: Number, default:0},
    likes: {type: Number, default:0},
    timestamp: {type: Date, default: Date.now}
});

//variable virtual 
ImageSchema.virtual('uniqueId')
    .get(function(){
        return this.filename.replace(path.extname(this.filename), '');
        //quita la extension de filename
    })


module.exports = mongoose.model('Image', ImageSchema);
