import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { BaseEntity } from "./base.entity"
import { User } from "./User"
import { Habilidad } from "./Habilidad"
import { Aplicacion } from "./Aplicacion"

@Entity()
export class Abogado extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @ManyToMany(() => Habilidad)
    @JoinTable()
    habilidades: Habilidad[]

    @OneToMany(() => Aplicacion, aplicacion => aplicacion.abogado)
    aplicaciones: Aplicacion[]
}