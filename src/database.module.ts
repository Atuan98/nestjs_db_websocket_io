import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { dataSourceOptions } from 'db/data-source';

@Module({
    imports: [TypeOrmModule.forRoot(dataSourceOptions)]
})
export class DatabaseModule {}