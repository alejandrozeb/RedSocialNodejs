const path = require("path");
const {randomNumber} = require('../helpers/libs');
const fs =require('fs-extra');
const ctrl = {};
ctrl.index= (req,res) =>{
    res.send('image pag');
};
ctrl.create = async(req,res)  =>{
    const imgUrl = randomNumber();
    console.log(imgUrl);
    //multer hae visible la info
    const imageTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();    //saca la extension de la imagen
    const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' ){
        await fs.rename(imageTempPath, targetPath);
        res.send('works!');
    }
    
};

ctrl.like = (req,res)  =>{
    res.send('like');
};

ctrl.comment = (req,res)  =>{
    res.send('comment');
};

ctrl.remove = (req,res)  =>{
    res.send('deleted');
};

module.exports = ctrl;