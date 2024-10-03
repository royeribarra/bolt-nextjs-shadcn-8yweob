import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { BaseEntity } from "./base.entity"
import { Cliente } from "./Cliente"
import { Habilidad } from "./Habilidad"
import { Aplicacion } from "./Aplicacion"

@Entity()
export class Oferta extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    descripcion: string

    @Column()
    presupuesto: number

    @ManyToOne(() => Cliente, cliente => cliente.ofertas)
    cliente: Cliente

    @ManyToMany(() => Habilidad)
    @JoinTable()
    habilidades_requeridas: Habilidad[]

    @OneToMany(() => Aplicacion, aplicacion => aplicacion.oferta)
    aplicaciones: Aplicacion[]
}