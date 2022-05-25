// import {Sequelize} from 'sequelize-typescript';

// import {User} from '../users/User';
// import {Post} from '../posts/Post';

// export const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: ':memory:',
//   models: [User, Post],
// });


import { Sequelize } from 'sequelize-typescript';
import { ecnaitrd } from './models/ecnaitrd';
import { kjeiadsn } from './models/kjeiadsn';
import { mglasifk } from './models/mglasifk';
import { nvcburjq } from './models/nvcburjq';

let host: any, username: any, password: any, database: any;

export const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    models: [ecnaitrd, kjeiadsn, mglasifk, nvcburjq]

})

let config: any = {
    host: host || process.env.DB_HOST,
    username: username || process.env.DB_USER,
    password: password || process.env.DB_PASS,
    dialect: 'mysql',
    database: database || process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    operatorsAliases: false,
    define: {
        freezeTableName: true,
        underscored: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        dialectOptions: {
            collate: 'utf8mb4_unicode_ci'
        }
    },
    pool: {
        max: 1000,
        min: 2,
        acquire: 90000,
        idle: 20000
    },
    logging: false,
    modelPaths: [
        __dirname + './models'
    ]
};
config.timezone = '+03:00';
if (!process.env.DEVELOPMENT) {
    config.logging = false;
    //buna gerek yok sunucunun timezone ayarlamak yeterli
    //bu komut: timedatectl set-timezone Europe/Istanbul
    //kontrol : timedatectl
}
else {
    config.logging = true;
}

const sequelize = new Sequelize(config);

export default sequelize;


if(sequelize.authenticate())
console.log('Connected to database');
else{
  console.log('Could not connect to database');
}