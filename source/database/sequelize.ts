import {Sequelize} from 'sequelize-typescript';

 import {User} from '../users/User';
 import {Brand} from '../brands/Brand';
 import {Product} from '../products/Product';
 import {Order} from '../orders/Order';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  models: [User, Brand,Product,Order],
});
