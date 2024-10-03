import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { BaseEntity } from "./base.entity"
import { Abogado } from "./Abogado"
import { Oferta } from "./Oferta"

@Entity()
export class Aplicacion extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    propuesta: string

    @Column()
    precio_propuesto: number

    @ManyToOne(() => Abogado, abogado => abogado.aplicaciones)
    abogado: Abogado

    @ManyToOne(() => Oferta, oferta => oferta.aplicaciones)
    oferta: Oferta
}