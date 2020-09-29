import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { Playlist } from "./Playlist";

@Entity()
export class Track {

    @PrimaryGeneratedColumn()
    TrackId: number;

    @Column()
    Name: string;

}