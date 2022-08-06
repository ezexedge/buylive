import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Direccion } from "./Direccion";
import {Role} from "./role.entity";


export enum genero {
    HOMBRE = 'hombre',
    MUJER = 'mujer',
    BINARIO = 'binario'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    dni: string;

    @Column({
        type: 'enum',
        enum: genero
    })
    genero: genero

    @Column()
    edad: string;

    @Column()
    tarjetaDeCredito: string;

    @Column()
    password: string;

    @Column()
    idFirebase: string;

    @ManyToOne(() => Role)
    @JoinColumn({name: 'role_id'})
    role: Role;

    @ManyToOne(() => Direccion)
    @JoinColumn({name: 'direccion_id'})
    direccion: Direccion;
}
