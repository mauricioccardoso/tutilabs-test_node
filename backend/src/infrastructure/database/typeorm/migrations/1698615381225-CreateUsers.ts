import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1688060044934 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: "users",
              columns: [
                  {
                      name: "id",
                      type: "varchar",
                      isPrimary: true,
                  },
                  {
                      name: "cpf",
                      type: "varchar",
                      isUnique: true
                  },
                  {
                      name: "nome",
                      type: "varchar",
                  },
                  {
                      name: "setor",
                      type: "varchar",
                  },
                  {
                      name: "email",
                      type: "varchar",
                      isUnique: true
                  },
                  {
                      name: "senha",
                      type: "varchar",
                  },
                  {
                      name: "created_at",
                      type: "timestamp",
                      default: "now()",
                  },
              ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
