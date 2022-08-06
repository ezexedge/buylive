import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Pais } from "./pais.entity";
import { Provincia } from "./provincia.entity";

@Entity()
export class Direccion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    calle: string;
    
    @Column()
    altura: string;

    @Column()
    ciudad: string;

    @ManyToOne(() => Pais)
    @JoinColumn({name: 'pais_id'})
    pais: Pais;

    @ManyToOne(() => Provincia)
    @JoinColumn({name: 'provincia_id'})
    provincia: Provincia;
    
}
//dd