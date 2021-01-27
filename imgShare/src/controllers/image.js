const path = require("path");
const {randomNumber} = require('../helpers/libs');
const fs =require('fs-extra');
const {Image} = require("../models");
const image = require("../models/image");


const ctrl = {};
ctrl.index= (req,res) =>{
    res.send('image pag');
};
ctrl.create = (req,res)  =>{
    const saveImage = async () =>{
        const imgUrl = randomNumber();
        const images =  await image.find({filename: imgUrl});
        if(images.length>0){
            saveImage();
        }else{
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();    //saca la extension de la imagen
        const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

        if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' ){
            await fs.rename(imageTempPath, targetPath);
            const newImg =  new Image({
                title: req.body.title,
                filename: imgUrl + ext,
                description: req.body.description
            });
            const imageSaved =  await newImg.save(); 
           // res.redirect('/images');
           res.send('works');       
        } else{
            await fs.unlink(imageTempPath);
            res.status(500).json({error: 'Only Images are allowed'});
        }
    }
    };
    saveImage();   
    //multer hae visible la info    
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