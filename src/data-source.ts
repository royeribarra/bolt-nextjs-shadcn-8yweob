import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Perfil } from "./entity/Perfil"
import { Abogado } from "./entity/Abogado"
import { Cliente } from "./entity/Cliente"
import { Habilidad } from "./entity/Habilidad"
import { Oferta } from "./entity/Oferta"
import { Aplicacion } from "./entity/Aplicacion"
import { Trabajo } from "./entity/Trabajo"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [User, Perfil, Abogado, Cliente, Habilidad, Oferta, Aplicacion, Trabajo],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})