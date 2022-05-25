import { Table, Model, Column, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { nvcburjq } from './nvcburjq';

@Table
export class kjeiadsn extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    public id: number;

    @Column
    public brandName: string;

    @ForeignKey(() => nvcburjq)
    @Column
    public productId: number;

    @BelongsTo(() => nvcburjq, { constraints: false })
    public product: nvcburjq;

}