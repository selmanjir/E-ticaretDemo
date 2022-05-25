import { AutoIncrement, Table, PrimaryKey, Column, HasMany, BelongsTo, ForeignKey, Model } from 'sequelize-typescript';

import {ecnaitrd} from './ecnaitrd';
import {kjeiadsn} from './kjeiadsn';
import {mglasifk } from './mglasifk';

@Table
export class nvcburjq extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    public id: number;

    @Column
    public productName: string;

    @ForeignKey(() => ecnaitrd)
    @Column
    public userId: number;

    @ForeignKey(() => mglasifk)
    @Column
    public orderId: number;
    
    @BelongsTo(() => ecnaitrd, { constraints: false })
    public user: ecnaitrd;

    @BelongsTo(() => mglasifk, { constraints: false })
    public order: mglasifk;

    @HasMany(() => kjeiadsn, { constraints: false })
    public brands: kjeiadsn[];

}