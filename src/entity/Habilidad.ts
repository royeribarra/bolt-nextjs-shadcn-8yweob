import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { BaseEntity } from "./base.entity"

@Entity()
export class Habilidad extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column({ nullable: true })
    descripcion: string
}