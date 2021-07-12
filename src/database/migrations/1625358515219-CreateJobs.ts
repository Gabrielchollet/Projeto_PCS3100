import {MigrationInterface, QueryRunner, Table} from "typeorm";

/* migration responsavel por criar o emprego */
export class CreateJobs1625358515219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                /* variaveis que definem um emprego */
                name: "jobs",
                columns: [
                    {
                        /* id universal do emprego*/
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        /* nome do empregador que criou a oferta em emprego */
                        name: "employer",
                        type: "varchar",
                    },
                    {
                        /* nome do empregado que aceitou a oferta,por padrao coloco null, 
                        mas quando alguem aceitar o valor dessa propriedade mudara*/
                        name: "worker",
                        type: "varchar",
                        default: null,
                    },
                    {
                        /* nome da profissao requisitada*/
                        name: "professional",
                        type: "varchar",
                    },
                    {
                        /* geolocalização do serviço */
                        name: "geolocation",
                        type: "varchar",
                    },
                    {
                        /* descrição do serviço */
                        name: "message",
                        type: "varchar",
                    },
                    {
                        /* data do serviço */
                        name: "date",
                        type: "timestamp",
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
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jobs");
    }

}
