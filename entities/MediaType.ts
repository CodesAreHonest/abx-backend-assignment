import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class MediaType {
    @PrimaryGeneratedColumn()
    MediaTypeId: number;

    @Column()
    Name: string;
}