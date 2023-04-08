import { Column, Entity } from "typeorm";
import { BaseEntity } from "../common/base.entity";

@Entity('account')
export class Account extends BaseEntity {

    @Column({ nullable: false })
    AccountNumber: number;

    @Column({ nullable: false })
    AccountName: string;

    @Column({ nullable: true })
    OpeningBalance: number;

}

