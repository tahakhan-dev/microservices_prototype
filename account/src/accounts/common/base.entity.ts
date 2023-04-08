import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ default: 1, nullable: false })
    IsActive: boolean;

    @Column({ default: 0 })
    IsDeleted: boolean;

}
