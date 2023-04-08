import { IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsNumber()
    Transaction_id?: number;

    @IsString()
    Transaction_detail?: string;

    @IsNumber()
    netAmount?: number;

    @IsNumber()
    accountId?: number;
}
