const moment = require('moment');

class Logger{

    constructor(prefix='PR', level='LOG', dateFormat="dddd, mm dS, YYYY, h:MM:ss TT"){
        this.prefix = prefix;
        this.level = level;
        this.dateFormat = dateFormat;
    }

    format(message, level=this.level){
        return `${moment().format(this.dateFormat)} | ${this.prefix} | ${level} | ${message}\n`;
    }
}

module.exports = Logger;