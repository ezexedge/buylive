import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Direccion } from "./Direccion";
import { Pais } from "./pais.entity";
@Entity()
export class Provincia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> Pais,(pais)=> pais.provincia)
    pais: Pais

}
//dd