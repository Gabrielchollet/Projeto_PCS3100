import { MigrationInterface, QueryRunner, Table } from "typeorm";

/* migration responsavel por criar o usuário */
export class CreateUsers1624323720786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                /* variaveis que definem um user */
                name: "users",
                columns: [
                    {
                        /* id universal do usuario*/
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        /* nome do usuario */
                        name: "name",
                        type: "varchar",
                    },
                    {
                        /* email do usuario */
                        name: "email",
                        type: "varchar",
                    },
                    {
                        /* o usuario pode ser admin ou nao */
                        name: "admin",
                        type: "boolean",
                        default: false,
                    },
                    {
                        /* o usuario pode ser empregado ou nao */
                        name: "worker",
                        type: "boolean",
                    },
                    {
                        /* o usuario pode ser empregador ou nao */
                        name: "employer",
                        type: "boolean",
                    },
                    {
                        /* se ele for empregado, tambem preciso saber sua profissao */
                        name: "professional",
                        type: "varchar",
                        /* se for empregador coloco null nessa propriedade */
                        default: null,
                    },
                    {
                        /* variavel de controle do banco de dados */
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        /* variavel de controle do banco de dados */
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
