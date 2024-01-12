import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mine } from "./mine.entity";
import { MinesController } from "./mine.controller";
import { MinesService } from "./mine.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Mine])
    ],
    controllers: [MinesController],
    providers: [
        MinesService
    ],
})
export class MinesModule { }