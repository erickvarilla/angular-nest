import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemEntity } from '../../item/entity/item.entity';

@Entity()
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column("double")
    valor: number;

    @Column()
    nombre: string;

    @OneToMany(type => ItemEntity, item => item.producto)
    item: ItemEntity[];

}
