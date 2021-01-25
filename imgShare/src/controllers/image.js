const ctrl = {};
ctrl.index= (req,res) =>{
    res.send('image pag');
};
ctrl.create = (req,res)  =>{
    res.send('created');
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