const helpers = {};

helpers.randomNumber = () =>{
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456';
    const randomNumber = 0;
    for(let i=0; 1 < 6 ; i++){
        randomNumber += possible.charAt(Math.floor(Math.random * possible.length));
    }
    return randomNumber;
}


module.exports = helpers;