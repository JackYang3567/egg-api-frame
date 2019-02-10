'use strict';

// had enabled by egg
// exports.static = true;
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}; 

exports.flash = {  
    enable: true ,
    package: 'eggmsgsession'
};

exports.validator = {  
    enable: true ,
    package: 'egg-y-validator'
};