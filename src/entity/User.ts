import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { BaseEntity } from "./base.entity"
import { Perfil } from "./Perfil"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email: string

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column({
        type: "enum",
        enum: ["admin", "abogado", "cliente"],
        default: "cliente"
    })
    role: "admin" | "abogado" | "cliente"

    @OneToOne(() => Perfil, perfil => perfil.user)
    perfil: Perfil
}