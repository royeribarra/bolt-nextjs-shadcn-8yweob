import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { BaseEntity } from "./base.entity"
import { User } from "./User"
import { Oferta } from "./Oferta"

@Entity()
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToMany(() => Oferta, oferta => oferta.cliente)
    ofertas: Oferta[]
}