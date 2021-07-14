import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

/* torna a senha do usuario invisivel no banco de dados */
export class AlterUserAddPassword1624710398246 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                /* senha do usuario */
                name: "password",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");
    }
}