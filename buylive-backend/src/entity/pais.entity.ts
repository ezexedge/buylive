import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Provincia } from "./provincia.entity";
import { Direccion } from "./Direccion";

@Entity()
export class Pais {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Provincia, (provincia) => provincia.pais)
    provincia: Provincia[]


}
//dd