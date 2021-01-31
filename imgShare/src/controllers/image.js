const path = require("path");
const {randomNumber} = require('../helpers/libs');
const fs =require('fs-extra');
const {Image,Comment} = require("../models");
const image = require("../models/image");
const md5 = require("md5");

const ctrl = {};
ctrl.index= async (req,res) =>{
   /*  parametroImagen = req.params.image_id;
    parametroImagen = parametroImagen.replace(path.extname(parametroImagen), '.'); */
    let image = await Image.findOne({filename: req.params.image_id});
    if(image){
        image.views = image.views + 1;
        await image.save();
        image = await Image.findOne({filename: req.params.image_id}).lean();
        const comments = await Comment.find({image_id: image._id}).lean();
        res.render('image', {image,comments});
    }else{
        res.redirect('/');
    }

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
           res.redirect('/images/' + imageSaved.filename );
           //res.send('works');       
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

ctrl.comment = async(req,res)  =>{
    const image = await Image.findOne({filename: req.params.image_id});
    if(image){
        const newComment = new Comment((req.body));
        newComment.gravatar = md5(newComment.email);
        newComment.image_id = image._id;
        await newComment.save();
        res.redirect('/images/'+ image.filename);
    }else{
        res.redirect('/');
    }
    
    
    
};

ctrl.remove = (req,res)  =>{
    res.send('deleted');
};

module.exports = ctrl;