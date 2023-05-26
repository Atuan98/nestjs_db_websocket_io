import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteAge1684923643797 implements MigrationInterface {
    name = 'DeleteAge1684923643797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

}
