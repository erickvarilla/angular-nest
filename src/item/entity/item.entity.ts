import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ProductoEntity } from '../../producto/entity/producto.entity';
import { FacturaEntity } from "src/factura/entity/factura.entity";

@Entity()
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    valorTotal: number;

    @Column()
    cantidad: number;

    @ManyToOne(type => ProductoEntity, producto => producto.item)
    producto: ProductoEntity;

    @OneToMany(type => FacturaEntity, factura => factura.factura)
    item: FacturaEntity[];
}
