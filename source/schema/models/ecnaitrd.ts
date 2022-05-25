import {Model, Table, Column, HasMany, AutoIncrement, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript';

import {mglasifk} from './mglasifk';
import { nvcburjq } from './nvcburjq';

@Table
export class ecnaitrd extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    public id: number;
    
    @Column
    public username: string;

    @Column
    public password: string;

    @Column
    public email: string;

    @CreatedAt
    public creationDate: Date;

    @UpdatedAt
    public updatedOn: Date;

    @HasMany(() => mglasifk, { constraints: false })
    public orders: mglasifk[];

    @HasMany(() => nvcburjq, { constraints: false })
    public products: nvcburjq[];


}
