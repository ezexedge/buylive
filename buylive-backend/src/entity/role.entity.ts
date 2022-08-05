import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
//dd