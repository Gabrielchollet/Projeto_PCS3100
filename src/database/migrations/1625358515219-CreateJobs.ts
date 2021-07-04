import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateJobs1625358515219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "jobs",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "user_sender",
                        type: "uuid",
                    },
                    {
                        name: "user_receiver",
                        type: "uuid",
                        default: null,
                    },
                    {
                        name: "message",
                        type: "varchar",
                        default: null,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jobs");
    }

}
