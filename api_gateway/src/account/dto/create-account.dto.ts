import { IsNumber, IsString } from "class-validator";

export class CreateAccountDto {

    @IsNumber()
    AccountNumber?: number;

    @IsString()
    AccountName?: string;

    @IsNumber()
    OpeningBalance?: number;

}
