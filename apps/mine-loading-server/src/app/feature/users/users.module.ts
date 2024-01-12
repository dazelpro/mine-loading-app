import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../../config/jwt.providers";
import { AuthService } from "../../auth/auth.service";
import { LocalStrategy } from "../../auth/local.strategy";
import { JwtStrategy } from "../../auth/jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {
                expiresIn: '1d',
            },
        }),
    ],
    controllers: [UsersController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        UsersService,
    ],
})
export class UsersModule { }