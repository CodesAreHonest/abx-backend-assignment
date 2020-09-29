import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    PlaylistId: number;

    @Column()
    Name: string;
}