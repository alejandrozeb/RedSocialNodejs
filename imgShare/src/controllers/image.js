const path = require("path");
const ctrl = {};
ctrl.index= (req,res) =>{
    res.send('image pag');
};
ctrl.create = (req,res)  =>{
    //multer hae visible la info
    const imageTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();    //saca la extension de la imagen
    const targetPath = path.resolve('src/public/upload/test${ext}');
    res.send('works!');
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