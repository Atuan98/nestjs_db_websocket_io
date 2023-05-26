import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import { DatabaseModule } from './database.module';
import { GateWayModule } from './gateway/gateway.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    GateWayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
