import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { BaseEntity } from "./base.entity"
import { Aplicacion } from "./Aplicacion"

@Entity()
export class Trabajo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fecha_inicio: Date

    @Column({ nullable: true })
    fecha_fin: Date

    @Column({
        type: "enum",
        enum: ["en_progreso", "completado", "cancelado"],
        default: "en_progreso"
    })
    estado: "en_progreso" | "completado" | "cancelado"

    @OneToOne(() => Aplicacion)
    @JoinColumn()
    aplicacion_aceptada: Aplicacion
}