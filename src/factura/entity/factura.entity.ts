import { ItemEntity } from '../../item/entity/item.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class FacturaEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    valorTotal: number;

    @Column()
    cliente: string;

    @ManyToOne(type => ItemEntity, item => item.item)
    factura: ItemEntity;
}
