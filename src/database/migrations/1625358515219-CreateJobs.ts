import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
                        name: "employer",
                        type: "varchar",
                    },
                    {
                        name: "worker",
                        type: "varchar",
                        default: null,
                    },
                    {
                        name: "professional",
                        type: "varchar",
                    },
                    {
                        name: "geolocation",
                        type: "varchar",
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "date",
                        type: "timestamp",
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
