
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../common/base.entity";

@Entity('transaction')
export class Transaction extends BaseEntity {

    @Column({ nullable: false })
    Transaction_id: number;

    @Column({ nullable: false })
    Transaction_detail: string;

    @Column({ nullable: true })
    netAmount: number;

    @Column({ nullable: true })
    accountId: number;
}

