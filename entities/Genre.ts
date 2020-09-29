import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    GenreId: number;

    @Column()
    Name: string;
}