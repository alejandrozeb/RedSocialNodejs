//helpers para handlebars
const moment = require('moment');
const helpers = {};

helpers.timeago = timestamp => {
     return moment(timestamp).startOf('minute').fromNow();  //calculamos el tiempo pasado desde la publicacion  de timestamp
}

module.exports  = helpers;