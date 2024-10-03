import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { BaseEntity } from "./base.entity"
import { User } from "./User"

@Entity()
export class Perfil extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column({ nullable: true })
    telefono: string

    @OneToOne(() => User, user => user.perfil)
    @JoinColumn()
    user: User
}