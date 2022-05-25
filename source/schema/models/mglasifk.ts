import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ecnaitrd } from './ecnaitrd';
import { nvcburjq } from './nvcburjq';


@Table 
export class mglasifk extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column
    public id: number;

    @Column
    public cargoCompany: string;

    @Column
    public customerName: string;

    @ForeignKey(() => ecnaitrd)
    @Column
    public userId: number;

    @HasMany(() => nvcburjq, { constraints: false })
    public orderedProducts: nvcburjq[];

    @BelongsTo(() => ecnaitrd, { constraints: false })
    public user: ecnaitrd;


    }