const path = require('path');
const exphbs= require("express-handlebars");
module.exports = app =>{
    //settings
    app.set('port', process.env.PORT || 3000);
    
    //views
    app.set('views', path.join(__dirname, 'views' ));
    app.set(".hbs", exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }) );
    app.set('view engine', '.hbs');
    //middlewares

    //routes

    //erros


    return app;
}